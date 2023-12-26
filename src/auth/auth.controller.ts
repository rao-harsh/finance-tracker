import { Controller, Post, Body } from '@nestjs/common';
import { SigninDto } from './dtos/signin.dto';

@Controller('api/v1/auth')
export class AuthController {

    @Post("/signin")
    async signin(req: Request, res: Response, @Body() body: SigninDto) {
        console.log(body)
        console.log(body.email, body.password)
        return body
    }

    @Post("/signup")
    async signup(req: Request, res: Response, @Body() body: any): Promise<void> {
        console.log(body)
    }

}
