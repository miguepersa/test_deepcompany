import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./User.schema";

@Schema()
export class Message {
    @Prop({required: true})
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    sender: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    receiver: User;    

    @Prop({ required: true })
    read: boolean;

    @Prop({ required: true })
    fav: boolean;
}
export const MessageSchema = SchemaFactory.createForClass(Message);