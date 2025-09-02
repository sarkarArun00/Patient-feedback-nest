import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  // Swagger configuration
  const config = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('API description')
  .setVersion('1.0')
  .addTag('auth')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.IS_DEV === 'true' ? 5000 : 3000;
  await app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
bootstrap();
