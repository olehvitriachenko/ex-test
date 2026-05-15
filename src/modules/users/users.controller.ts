import { Controller, Post, Body, Put, Param, Get, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, UpdateUserDTO, UpdateUserStatusDTO, ViewUserDTO } from './dto';
import { IdParamDTO } from 'src/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsersList(): ViewUserDTO[] {
    return this.usersService.getUsersList()
  }

  @Get(':id')
  getUser(
  @Param() {id}: IdParamDTO): ViewUserDTO {
      return this.usersService.getUser(id)
  }

  @Post()
  createUser(
    @Body() data: CreateUserDTO): ViewUserDTO {
    return this.usersService.createUser(data);
  }

  @Put(':id')
    updateUser(
      @Param() {id}: IdParamDTO,
      @Body() data: UpdateUserDTO): ViewUserDTO {
        return this.usersService.updateUser(id, data);
    }

  @Put(":id/status") 
  updateUserStatus(
    @Param() {id}: IdParamDTO,
    @Body() data: UpdateUserStatusDTO): ViewUserDTO {
      return this.usersService.updateUserStatus(id, data)
  }
}
