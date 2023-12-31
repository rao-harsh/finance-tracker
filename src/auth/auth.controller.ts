import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { SigninDto } from './dtos/signin.dto';
import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dtos';

@Controller('api/v1/auth')
export class AuthController {

    constructor(public authService: AuthService) {

    }

    @Post("/signin")
    async signin(req: Request, res: Response, @Body() body: SigninDto) {
        console.log(body)
        return await this.authService.signIn(body.email,body.password)
    }

    @Post("/signup")
    async signup(req: Request, res: Response, @Body() body: SignupDto) {
        console.log(body)
        return await this.authService.create(body)
    }

}
