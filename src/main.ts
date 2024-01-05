import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
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

  app.setGlobalPrefix("api/v1/")

  app.enableCors({
    origin: ["http://localhost:3001", "http://127.0.0.1:3001"]
  })

  console.log(process.env.PORT)
  await app.listen(process.env.PORT);
}

bootstrap();
