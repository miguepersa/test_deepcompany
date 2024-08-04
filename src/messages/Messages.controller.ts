import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { MessagesService } from "./Messages.service";
import { SendMessageDto } from "./dto/SendMessage.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";
import { Request } from "express";

@Controller('messages')
export class MessagesController {
    
    constructor( private messagesService: MessagesService) {}

    @Post('send')
    @UseGuards(JwtAuthGuard)
    sendMessage( @Req() req: Request, @Body() sendMessageDto: SendMessageDto) {
        const user_id = req.user['_doc']['_id']
        return this.messagesService.sendMessage(sendMessageDto, user_id)
    }

    @Patch('mark_read/:id')
    @UseGuards(JwtAuthGuard)
    markMessageRead(@Req() req: Request, @Param('id') id: string) {
        const user_id = req.user['_doc']['_id']
        return this.messagesService.markMessageRead(id, user_id);
    }

    @Patch('fav/:id')
    @UseGuards(JwtAuthGuard)
    favMessage(@Req() req: Request, @Param('id') id: string) {
        const user_id = req.user['_doc']['_id']
        return this.messagesService.favMessage(id, user_id);
    }

    @Patch('unfav/:id')
    @UseGuards(JwtAuthGuard)
    unfavMessage(@Req() req: Request, @Param('id') id: string) {
        const user_id = req.user['_doc']['_id']
        return this.messagesService.unfavMessage(id, user_id);
    }

    @Get('fav')
    @UseGuards(JwtAuthGuard)
    getFavMessages(@Req() req: Request) {
        const user_id = req.user['_doc']['_id']
        return this.messagesService.getFavMessages(user_id);
    }

    @Get('unread')
    @UseGuards(JwtAuthGuard)
    getUnreadMessages(@Req() req: Request) {
        const user_id = req.user['_doc']['_id']
        return this.messagesService.getUnreadMessages(user_id);
    }
}