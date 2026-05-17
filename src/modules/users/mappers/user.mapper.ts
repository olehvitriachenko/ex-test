import { Injectable } from '@nestjs/common';
import type { User } from 'generated/prisma/client';

import { ViewUserDTO } from '../dto';
import { mapUserRoleFromDB } from './user-role.mapper';
import { mapUserStatusFromDB } from './user-status.mapper';

export class UserViewMapper {
  mapOne(user: User): ViewUserDTO {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: mapUserRoleFromDB(user.role),
      status: mapUserStatusFromDB(user.status),
      createdAt: user.createdAt,
      createdBy: user.createdBy,
    };
  }

  mapMany(users: User[]): ViewUserDTO[] {
    return users.map((user) => this.mapOne(user));
  }
}