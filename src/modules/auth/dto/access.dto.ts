import { ViewProfileDTO } from "src/modules/users/profile/dto";

export class AccessDTO extends ViewProfileDTO{
    token!: string
}