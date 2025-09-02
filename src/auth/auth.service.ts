import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entities/user.entity';
import { SignupDto } from '../dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
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
        const user = await this.UserModel.findOne({ where: { email } });
        if (!user) throw new UnauthorizedException('Invalid credentials');

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new UnauthorizedException('Invalid credentials');

        // return safe user info (no password)
        return { id: user.id, email: user.email };
    }

    // Login
    async login(email: string, password: string) {
        // try {
            const data = await this.validateUser(email, password);
        console.log('jjjjjjjjjjjjj', data)
            // Generate JWT
            const payload = { email: data.email, sub: data.id };
            const token = this.jwtService.sign(payload);

            return {
                status: 1,
                message: 'Login successful',
                access_token: token,
            };
        // } catch (error) {
        //     return {
        //         status: 0,
        //         message: 'An error occurred during login',
        //         error: error.message,
        //     };
        // }
    }

}
