import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO, UpdateUserDTO, UpdateUserStatusDTO, ViewUserDTO } from "./dto";
import { PrismaService } from "src/prisma";
import { UserStatus } from "generated/prisma/enums";
import { mapUserRoleToDB, UserViewMapper } from "./mappers";
import { mapUserStatusToDB } from "./mappers/user-status.mapper";

@Injectable()
export class UsersService {

    private readonly mapper = new UserViewMapper();

    constructor( 
        private readonly prisma: PrismaService,
     ) {}
 
    async createUser(data: CreateUserDTO): Promise<ViewUserDTO> {

        const dataRole = mapUserRoleToDB(data.role)

        const user = await this.prisma.user.create({
              data: {
                role: dataRole,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                status: UserStatus.active,
              }        
        })
        return this.mapper.mapOne(user)
    }

    async getUsersList(): Promise<ViewUserDTO[]> {
            const users = await this.prisma.user.findMany();

                    return this.mapper.mapMany(users)
    }

    async getUser(id: string): Promise<ViewUserDTO> {

       const user = await this.prisma.user.findUnique({
        where: {
            id,
        }
       })

       if (!user) {
        throw new NotFoundException(
            'User not found'
        );
       }

       return this.mapper.mapOne(user)
    }

    async updateUser(id: string, data: UpdateUserDTO): Promise<ViewUserDTO> {
        await this.getUser(id)

        const user = await this.prisma.user.update({
            where: {
                id,
            },

            data: {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role
                    ? mapUserRoleToDB(data.role)
                    : undefined,
            },
        });

       return this.mapper.mapOne(user)

    }

    async updateUserStatus(id: string, data: UpdateUserStatusDTO): Promise<ViewUserDTO> {
        await this.getUser(id)
        const user = await this.prisma.user.update({
            where: {
                id
            },
            data: {
                status: mapUserStatusToDB(
                    data.status
                )
            }
        })

       return this.mapper.mapOne(user)

    }
}
