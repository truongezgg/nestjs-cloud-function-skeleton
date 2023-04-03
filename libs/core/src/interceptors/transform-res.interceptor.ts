import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(c: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        if (!data?.paging) return { data: data || null };

        delete data.paging;
        return data;
      }),
    );
  }
}
