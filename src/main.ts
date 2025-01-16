import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as dotenv from 'dotenv';
import { HttpExceptionFilter } from './common/exceptions/filters/http-exception.filter';

async function bootstrap() {
  // dotenv.config();
  const app = await NestFactory.create(AppModule);

  // Apply the exception filter globally
  app.useGlobalFilters(new HttpExceptionFilter());

  //enable request
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });


  await app.listen(3006, () => {
    console.log('App is running on port http://localhost:3006');
  });
}
bootstrap();
