import { IsEmail, IsString, isEmail, IsNotEmpty } from "class-validator";

export class SignupDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    username: string;

    first_name: string;

    last_name: string;

    phone_number: string;
}