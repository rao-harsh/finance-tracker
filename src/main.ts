import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { config } from "dotenv";
import { MongoConnect } from './db/db';

config()

MongoConnect.connect(process.env.MONGODB_URL)


async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )

  console.log(process.env.PORT)
  await app.listen(process.env.PORT);
}

bootstrap();
