import { IsEmail, IsEnum, Length } from 'class-validator';
import { UserRole } from '../enums';

export class CreateUserDTO {
  @IsEmail()
  email!: string;

  @Length(1, 50)
  firstName!: string;

  @Length(1, 50)
  lastName!: string;

  @IsEnum(UserRole)
  role!: UserRole;
}
