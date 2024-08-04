import { Body, Controller, Param, Patch, Post } from "@nestjs/common";
import { MessagesService } from "./Messages.service";
import { SendMessageDto } from "./dto/SendMessage.dto";

@Controller('messages')
export class MessagesController {
    
    constructor( private messagesService: MessagesService) {}

    @Post()
    sendMessage( @Body() sendMessageDto: SendMessageDto) {
        return this.messagesService.sendMessage(sendMessageDto)
    }

    @Patch('mark_read/:id')
    markMessageRead(@Param('id') id: string) {
        return this.messagesService.markMessageRead(id);
    }

    @Patch('fav/:id')
    favMessage(@Param('id') id: string) {
        return this.messagesService.favMessage(id);
    }

    @Patch('unfav/:id')
    unfavMessage(@Param('id') id: string) {
        return this.messagesService.unfavMessage(id);
    }
}