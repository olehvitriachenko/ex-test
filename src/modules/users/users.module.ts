import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ProfileContoller } from './profile';
import { ProfileService } from './profile/profile.service';

@Module({
  controllers: [ProfileContoller, UsersController],
  providers: [UsersService, ProfileContoller],
  exports: [ProfileService],
})
export class UsersModule {}
