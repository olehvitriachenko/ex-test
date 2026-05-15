import { UserRole } from "../../enums";

export class ViewProfileDTO {
    id!: string;
    role!: UserRole;
    firstName!: string;
    lastName!: string;
    email!: string

}