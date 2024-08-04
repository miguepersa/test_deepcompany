import { Body, Controller, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { MessagesService } from "./Messages.service";
import { SendMessageDto } from "./dto/SendMessage.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

@Controller('messages')
export class MessagesController {
    
    constructor( private messagesService: MessagesService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    sendMessage( @Body() sendMessageDto: SendMessageDto) {
        return this.messagesService.sendMessage(sendMessageDto)
    }

    @Patch('mark_read/:id')
    @UseGuards(JwtAuthGuard)
    markMessageRead(@Param('id') id: string) {
        return this.messagesService.markMessageRead(id);
    }

    @Patch('fav/:id')
    @UseGuards(JwtAuthGuard)
    favMessage(@Param('id') id: string) {
        return this.messagesService.favMessage(id);
    }

    @Patch('unfav/:id')
    @UseGuards(JwtAuthGuard)
    unfavMessage(@Param('id') id: string) {
        return this.messagesService.unfavMessage(id);
    }
}