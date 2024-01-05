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
        try {
            const user = await userModel.create({ _id: id, ...body })
            console.log(user);
            delete user.__v;
            
            return {user,message:"You're successfully registered"};
        } catch (error) {
            if (error.code === 11000 || error.code === 11001) {
                console.log("Duplicate key error: This record already exists");
                return { message: "Email already exists" }
            }
            else {
                return { message: "Error saving document: ", error }
            }
        }
    }
}