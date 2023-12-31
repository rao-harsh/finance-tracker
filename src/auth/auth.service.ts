import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";

import { userModel } from "./auth.model";
import { AuthRepository } from "./auth.repository";

import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(public authRepo: AuthRepository, private jwtService: JwtService) {
    }

    async signIn(email: string, password: string) {
        let user: any = await userModel.findOne({ email: email });
        if (user) {
            const passwordMatch = await user.checkPassword(password)
            if (!passwordMatch) {
                throw new UnauthorizedException({ message: "Invalid email or password" })
            }

            const payload = { id: user._id, email: user.email, username: user?.username }
            return {
                accessToken: await this.jwtService.signAsync(payload)
            }
        }
        else {
            throw new NotFoundException({ message: "Invalid email or password" })
        }
    }


    async create(body) {
        return await this.authRepo.create(body);
    }
}