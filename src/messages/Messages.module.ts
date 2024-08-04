import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Message, MessageSchema } from "src/schemas/Message.schema";
import { User, UserSchema } from "src/schemas/User.schema";
import { MessagesService } from "./Messages.service";
import { MessagesController } from "./Messages.controller";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            },
            {
                name: Message.name,
                schema: MessageSchema
            }
        ])
    ],
    providers: [MessagesService, JwtAuthGuard],
    controllers: [MessagesController]
})
export class MessagesModule {}