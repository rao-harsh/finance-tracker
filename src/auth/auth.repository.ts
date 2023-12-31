import { Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";

import { userModel } from "./auth.model";

@Injectable()
export class AuthRepository {
    async findOne(email: string) {
        const user = await userModel.findOne({ email: email })
        return user;
    }

    async create(body) {
        let id = `ID-${uuid()}`
        const user = await userModel.create({ _id: id,...body })
        console.log(user);
        delete user.__v;
        return user;
    }
}