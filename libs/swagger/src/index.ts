import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function initSwaggerForAPI(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Scheduler as a service')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
}

export function initSwaggerForAPIAdmin(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('API Admin')
    .setDescription('Scheduler as a service')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
}
