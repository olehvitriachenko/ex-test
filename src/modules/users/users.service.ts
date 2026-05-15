import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO, UpdateUserDTO, UpdateUserStatusDTO, ViewUserDTO } from "./dto";
import { UserAccountStatus } from "./enums";
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
    private users: ViewUserDTO[] = []

    createUser(data: CreateUserDTO): ViewUserDTO {
    const user: ViewUserDTO = {
        id: randomUUID(),
        ...data,
        status: UserAccountStatus.ACTIVE,
        createdAt: Date.now().toString(),
        createdBy: ""
    };

    this.users.push(user)

    return user
    }

    getUsersList(): ViewUserDTO[] {
            return this.users;
    }

    getUser(id: string): ViewUserDTO {
        const user = this.users.find((user) => user.id === id)

        if(!user) {
            throw new NotFoundException('User not found')
        }

        return user
    }

    updateUser(id: string, data: UpdateUserDTO): ViewUserDTO {
        const user = this.getUser(id);

        Object.assign(user, data);

        return user;
    }

    updateUserStatus(id: string, data: UpdateUserStatusDTO): ViewUserDTO {
        const user = this.getUser(id)

        user.status = data.status

        return user
    }
}
