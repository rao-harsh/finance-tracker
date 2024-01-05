import { Schema, model } from "mongoose";


import * as bcrypt from "bcrypt";

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: false,
        // unique: true,
        default: null
    },
    first_name: {
        type: String,
        required: false,
        default: null
    },
    last_name: {
        type: String,
        required: false,
        default: null
    },
    phone_number: {
        type: String,
        required: false,
        default: null
    }
})

userSchema.methods.checkPassword = async function checkPassword(password: string): Promise<boolean> {
    console.log(this.password)
    return bcrypt.compare(password, this.password)
};

userSchema.pre("save", async function (next) {
    console.log("executed");
    if (this.password) {
        const hashedPassword: string = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword
    }
    next()
})

export const userModel = model("user_m", userSchema)
