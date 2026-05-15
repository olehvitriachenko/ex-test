import { IsEmail, IsStrongPassword, Length, minLength } from "class-validator";

export class SetPasswordDTO {
    @Length(1, 100)
    token!: string;
    @IsEmail()
    email!: string;
    @IsStrongPassword()
    password!: string;
}