import { IsEnum, IsOptional, IsString } from "class-validator";
import { UserAccountStatus } from "../enums";

export class UpdateUserStatusDTO {
    @IsEnum(UserAccountStatus)
    status!: UserAccountStatus;

    @IsOptional()
    @IsString()
    reason?: string;
}