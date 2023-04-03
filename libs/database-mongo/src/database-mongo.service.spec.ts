import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseMongoService } from './database-mongo.service';

describe('DatabaseMongoService', () => {
  let service: DatabaseMongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseMongoService],
    }).compile();

    service = module.get<DatabaseMongoService>(DatabaseMongoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
