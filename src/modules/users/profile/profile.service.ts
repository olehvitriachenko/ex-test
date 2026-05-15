import { Injectable } from "@nestjs/common";
import { ViewProfileDTO } from "./dto";
import { UserRole } from "../enums";

@Injectable()
export class ProfileService {
    GetUserProfile(id: string): ViewProfileDTO {
        return {
            id,
            role: UserRole.Admin,
            firstName: 'One',
            lastName: 'oO',
            email: 'retrod@fd.com',
        }

    }
}