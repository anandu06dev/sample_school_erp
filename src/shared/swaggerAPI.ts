import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function createSwaggerAPI(app: any) {
  const config = new DocumentBuilder()
    .setTitle('School solutions')
    .setDescription('School ERP solutions')
    .setVersion('1.0')
    .addTag('school solutions')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
