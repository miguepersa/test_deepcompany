import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/User.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    private blacklist = new Set<string>();

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async validateUser({ username, password }: AuthPayloadDto) {
        const user = await this.userModel.findOne({'username': username});

        if (!user) throw new HttpException('User not found', 404);

        if (password == user.pwd) {
            const { pwd, ...loggedUser} = user;
            return this.jwtService.sign(loggedUser);
        }

        throw new UnauthorizedException();
    }

    blacklistToken(token) {
        this.blacklist.add(token)
    }

    isBlacklistedToken(token) {
        return this.blacklist.has(token);
    }

}
