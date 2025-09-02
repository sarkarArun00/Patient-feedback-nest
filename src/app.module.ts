import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { User } from './entities/user.entity';

@Module({
  imports: [
      SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '91.108.104.62',
      port: 3306,
      username: 'root',
      password: 'Root_1001',
      database: 'patient_feedbacks',
      models: [User],
      synchronize: false,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    FeedbacksModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      await this.sequelize.sync({ alter: false });
      console.log('✅ Database connection established successfully.');
    } catch (error) {
      console.error('❌ Unable to connect to the database:', error);
    }
  }
}
