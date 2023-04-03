import { Request, Response } from 'express';
import { Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ArgumentsHost } from '@nestjs/common';
import { pick } from 'lodash';
import { ErrorCode } from '../types/enum';

/**
 * Format response body error object
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();

    Object.assign(exception, {
      request: {
        method: request.method,
        url: request.url,
        body: request.body,
        ip: request.ip,
      },
    });
    console.error(exception);
    // this.logger.error(exception);

    const { statusCode, ...errorObject } = formatErrorObject(exception);

    response.status(statusCode).json(errorObject);
  }
}

interface IFormatErrorObject {
  success: boolean;
  statusCode: number;
  errorCode: string;
  errorMessage?: string;
  devMessage?: string;
  payload?: unknown;
}

export function formatErrorObject(exception: HttpException | any) {
  const errorObj: IFormatErrorObject = {
    success: false,
    statusCode: exception.status || HttpStatus.BAD_REQUEST,
    errorCode: ErrorCode.Unknown_Error,
    errorMessage: undefined,
    devMessage: undefined,
    payload: undefined,
  };

  if (errorObj.statusCode === HttpStatus.UNPROCESSABLE_ENTITY) {
    errorObj.errorCode = ErrorCode.Invalid_Input;
    errorObj.devMessage = errorObj.devMessage || exception?.response?.message;
  }

  if (exception instanceof HttpException) {
    const data = exception.getResponse() as any;
    if (data?.error === 'Not Found') {
      return {
        success: false,
        statusCode: data?.status || HttpStatus.BAD_REQUEST,
        errorCode: ErrorCode.Not_Found,
        errorMessage: data?.message,
      };
    }

    const extraData = pick(data, ['errorCode', 'statusCode', 'devMessage', 'payload', 'errorMessage']);

    Object.assign(errorObj, extraData);

    if (data === 'ThrottlerException: Too Many Requests') {
      Object.assign(errorObj, {
        errorCode: ErrorCode.The_Allowed_Number_Of_Calls_Has_Been_Exceeded,
        devMessage: 'Too Many Requests',
      });
    }
  }

  // TODO: Replace with real text
  // TODO: Get errorMessage from language
  if (!errorObj?.errorMessage) errorObj.errorMessage = errorObj.errorCode;

  return errorObj;
}
