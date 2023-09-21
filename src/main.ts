import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const validationPipe = new ValidationPipe({ 
    whitelist: true, 
    transform: true, 
    transformOptions: { 
        enableImplicitConversion: true 
      }
    });
  app.useGlobalPipes(validationPipe);
  await app.listen(3000, () => {
    console.log('Server Started On: 3000');
  });
}
bootstrap();
