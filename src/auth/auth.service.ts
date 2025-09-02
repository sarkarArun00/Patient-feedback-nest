import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/user.entity';
import { SignupDto } from '../dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
        private readonly jwtService: JwtService,
        @InjectModel(User) private UserModel: typeof User,
    ) { }

    async signup(signupDto: SignupDto) {
        const { email, password } = signupDto;

        // check if user exists
        const existing = await this.userModel.findOne({ where: { email } });
        if (existing) {
            throw new BadRequestException('Email already exists');
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = await this.userModel.create({
            email,
            password: hashedPassword,
        });

        return {
            status: 1,
            message: 'User registered successfully',
            data: {
                id: user.id,
                email: user.email,
            },
        };
    }


    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({
            where: { email: email },   // ✅ make sure it's passed as a string
        });
        console.log('Fetched User:', email, password);

        if (!user) throw new UnauthorizedException('Invalid credentials');

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new UnauthorizedException('Invalid credentials');

        return { id: user.id, email: user.email };
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const data = await this.validateUser(email, password);

        const payload = { email: data.email, sub: data.id };
        const token = this.jwtService.sign(payload);

        return {
            status: 1,
            message: 'Login successful',
            access_token: token,
        };
    }
}
