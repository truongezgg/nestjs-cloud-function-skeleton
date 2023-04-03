import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ip')
  getIp(@Req() req: Request): string {
    return req.ip;
  }
}
