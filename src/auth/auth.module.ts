import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { JwtModule } from '@nestjs/jwt';
import { config } from "dotenv";

config()

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '14d' }
  })],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository]
})
export class AuthModule { }
