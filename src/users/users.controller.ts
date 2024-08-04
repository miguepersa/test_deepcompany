import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpException, 
    Param, 
    Patch, 
    Post, 
    Req, 
    UseGuards
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import mongoose from "mongoose";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

@Controller('users')
export class UsersController {

    constructor( private usersService: UsersService) {}

    @Post()
    createUser( @Body() createUserDto: CreateUserDto ) {
        return this.usersService.createUser(createUserDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    listUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getUserById(@Param('id') id: string) {

        const isValid = mongoose.Types.ObjectId.isValid(id);

        if (!isValid) throw new HttpException('User not found', 404);

        const findUser = await this.usersService.getUserById(id);

        if (!findUser) throw new HttpException('User not found', 404);
        
        return findUser;
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteUser(@Param('id') id: string ) { 
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('User not found', 404);
      
        const deletedUser = await this.usersService.deleteUser(id);
        if (!deletedUser) throw new HttpException('User not found', 404);
        return;
    }
}