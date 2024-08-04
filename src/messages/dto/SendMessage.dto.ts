import { IsNotEmpty, IsString } from "class-validator";

export class SendMessageDto {
    @IsNotEmpty()
    @IsString()
    content: string

    @IsNotEmpty()
    @IsString()
    sender: string

    @IsNotEmpty()
    @IsString()
    receiver: string

}