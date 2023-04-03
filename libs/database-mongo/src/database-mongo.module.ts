import { Module } from '@nestjs/common';
import { DatabaseMongoService } from './database-mongo.service';

@Module({
  providers: [DatabaseMongoService],
  exports: [DatabaseMongoService],
})
export class DatabaseMongoModule {}
