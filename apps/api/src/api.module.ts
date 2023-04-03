import { AllExceptionsFilter } from '@app/core/filters/http-exception.filter';
import { TransformResponseInterceptor } from '@app/core/interceptors/transform-res.interceptor';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [
    ApiService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor,
    },
  ],
})
export class ApiModule {}
