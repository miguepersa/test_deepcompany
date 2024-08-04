import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true })
    pwd: string;

}

export const UserSchema = SchemaFactory.createForClass(User);