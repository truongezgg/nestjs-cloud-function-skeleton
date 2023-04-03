import { AllExceptionsFilter } from '@app/core/filters/http-exception.filter';
import { TransformResponseInterceptor } from '@app/core/interceptors/transform-res.interceptor';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ApiAdminController } from './api-admin.controller';
import { ApiAdminService } from './api-admin.service';

@Module({
  imports: [],
  controllers: [ApiAdminController],
  providers: [
    ApiAdminService,
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
export class ApiAdminModule {}
