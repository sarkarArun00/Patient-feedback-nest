import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PatientFeedback } from 'src/entities/patient-feedback.entity';
import { ClientFeedback } from 'src/entities/client-feedback.entity';
import { EmployeeFeedback } from 'src/entities/employee-feedback.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([PatientFeedback, ClientFeedback, EmployeeFeedback]), // 👈 Register model here
  ],
  providers: [FeedbacksService],
  controllers: [FeedbacksController]
})
export class FeedbacksModule {}
