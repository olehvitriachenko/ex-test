import type { User } from 'generated/prisma/client';
import { ViewUserDTO } from '../dto';
import {
  mapUserRoleFromDB,
} from './user-role.mapper';

import {
  mapUserStatusFromDB,
} from './user-status.mapper';


export const toViewUserDTO = (
    user: User,
): ViewUserDTO => {

    const role = mapUserRoleFromDB(user.role)
    const status = mapUserStatusFromDB(user.status)

    return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: role,
        status: status,
        createdAt: user.createdAt,
        createdBy: user.createdBy,

    }
}