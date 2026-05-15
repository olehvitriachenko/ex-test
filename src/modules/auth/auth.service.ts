import { Injectable } from "@nestjs/common";
import { AccessDTO, LoginDTO } from "./dto";
import { ProfileService } from "../users/profile/profile.service";
import { randomUUID } from "crypto";

@Injectable()
export class AuthService {

    constructor(private readonly profileService: ProfileService) {}

    login(data: LoginDTO): AccessDTO {
        const id = randomUUID()
        const profile = this.profileService.GetUserProfile(id)
        return {
            ...profile, token: 'fd'
        }
    }
}