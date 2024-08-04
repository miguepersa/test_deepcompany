import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Message } from "src/schemas/Message.schema";
import { SendMessageDto } from "./dto/SendMessage.dto";

@Injectable()
export class MessagesService {
    constructor( @InjectModel(Message.name) private messageModel: Model<Message>) {}

    sendMessage(sendMessageDto: SendMessageDto) {
        const newMessage = new this.messageModel(sendMessageDto);
        return newMessage.save();
    }

    markMessageRead(id: string) {
        return this.messageModel.findByIdAndUpdate(id, {read: true}, {new: true})
    }

    favMessage(id: string) {
        return this.messageModel.findByIdAndUpdate(id, {fav: true}, {new: true})
    }

    unfavMessage(id: string) {
        return this.messageModel.findByIdAndUpdate(id, {fav: false}, {new: true})
    }
}