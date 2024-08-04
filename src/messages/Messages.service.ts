import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Message } from "src/schemas/Message.schema";
import { SendMessageDto } from "./dto/SendMessage.dto";

@Injectable()
export class MessagesService {
    constructor( @InjectModel(Message.name) private messageModel: Model<Message>) {}

    sendMessage(sendMessageDto: SendMessageDto, user_id: string) {
        const newMessage = new this.messageModel({...sendMessageDto, sender: user_id, fav: false, read: false});
        return newMessage.save();
    }

    async markMessageRead(id: string, user_id: string) {
        const msg = await this.messageModel.findById(id);
        if (String(msg.receiver) == user_id){
            return this.messageModel.findByIdAndUpdate(id, {read: true}, {new: true})
        }

        throw new UnauthorizedException();
    }

    async favMessage(id: string, user_id: string) {
        const msg = await this.messageModel.findById(id);
        if (String(msg.sender) == user_id || String(msg.receiver) == user_id){
            return this.messageModel.findByIdAndUpdate(id, {fav: true}, {new: true})
        }

        throw new UnauthorizedException();
    }

    async unfavMessage(id: string, user_id: string) {
        const msg = await this.messageModel.findById(id);
        if (String(msg.sender) == user_id || String(msg.receiver) == user_id){
            return this.messageModel.findByIdAndUpdate(id, {fav: false}, {new: true})
        }

        throw new UnauthorizedException();
    }

    async getFavMessages(user_id) {
        return this.messageModel.find({
            fav: true,
            $or : [
                { sender: user_id },
                { receiver: user_id }
            ]
        }).exec();
    }

    async getUnreadMessages(user_id) {
        return this.messageModel.find({
            read: false,
            receiver: user_id 
        }).exec();
    }
}