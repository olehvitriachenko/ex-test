import { Body, Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDTO } from "./dto";
import { ViewProfileDTO } from "../users/profile/dto";

@Controller('auth')
export class AuthController {
        constructor(private readonly authService: AuthService) {
            
        }
        Login(
            @Body() data: LoginDTO
        ): ViewProfileDTO {
            return this.authService.login(data)
        }
}