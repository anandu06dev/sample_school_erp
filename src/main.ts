import { NestFactory } from '@nestjs/core';
import { createSwaggerAPI } from '@shared/swaggerAPI';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createSwaggerAPI(app);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
