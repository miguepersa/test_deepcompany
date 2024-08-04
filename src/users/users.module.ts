import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/User.schema";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            },
        ])
    ],
    providers: [UsersService, JwtAuthGuard],
    controllers: [UsersController],
})
export class UsersModule{}