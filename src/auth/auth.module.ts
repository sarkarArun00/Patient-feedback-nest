import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../entities/user.entity';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ConfigModule, // 👈 ensure config is imported
    PassportModule,
    SequelizeModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        console.log('Loaded JWT Secret:', secret); // 👈 debug log
        return {
          secret,
          signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') || '12h' },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
