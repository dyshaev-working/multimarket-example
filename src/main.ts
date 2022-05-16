import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';

function initializeSwaggerDocumentation(app: INestApplication) {
  const config = new DocumentBuilder()
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/swagger', app, document);
}

async function bootstrap() {
  const globalPrefix = '/api';

  const app = await NestFactory.create(MainModule, {
    cors: {
      origin: '*',
      credentials: true,
    },
    logger: ['log', 'error', 'verbose', 'debug'],
  });

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      whitelist: true,
      transform: true,
    }),
  );

  initializeSwaggerDocumentation(app);

  await app.listen(process.env.PORT ? process.env.PORT : 8088, '0.0.0.0');

  console.log(
    `Application is running on: ${await app.getUrl()}${globalPrefix}`,
  );
}
bootstrap();
