import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { UserModule } from './controller/user/user.module';
import { UserService } from './controller/user/user.service';

@Module({
  imports: [
    UserModule
  ],
  controllers: [
    AppController, 
    UserController,
  ],
  providers: [
    AppService,
    UserService,
  ],
})
export class AppModule {}
