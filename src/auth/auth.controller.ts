import { Controller, Post, Body, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(public authService: AuthService) {

    }

    @Post("/signin")
    async signin(req: Request, res: Response, @Body() body: any) {
        console.log(body)
        return await this.authService.signIn(body.email, body.password)
    }

    @Post("/signup")
    async signup(req: Request, res: Response, @Body() body: any) {
        console.log(body)
        return await this.authService.signUp(body)
    }

}
