import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/Messages.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/deepcompany_test"),
    UsersModule,
    MessagesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
