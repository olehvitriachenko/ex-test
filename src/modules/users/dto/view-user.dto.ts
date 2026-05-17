import { UserAccountStatus, UserRole } from '../enums';

export class ViewUserDTO {

  id!: string; 
  email!: string;
  firstName!: string;
  lastName!: string;
  role!: UserRole;
  status!: UserAccountStatus;
  createdAt!: Date;
  createdBy!: string | null;
}
