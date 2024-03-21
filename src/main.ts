import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const optionsApp = { customSiteTitle: 'API Gerenciamento Facul' };
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API')
    .setContact('Renan', '', 'renan010222002@hotmail.com')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document, optionsApp);

  await app.listen(3000);
}
bootstrap();
