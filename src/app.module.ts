import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import { AuthModule } from './modules/auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig]
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
