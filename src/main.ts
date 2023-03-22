import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrapper');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get('APP_PORT');
  const swagger = new DocumentBuilder()
    .setTitle('My NestPRO')
    .setDescription('Learn the core fundamental concepts of NestJS')
    .setVersion('1.0.0')
    .addTag('NestJS')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api', app, document);

  await app.listen(Number(port));

  logger.log(`App listening on port ${port}`);
}

const promise = bootstrap();
promise.catch((err) => {
  console.error(err);
});
