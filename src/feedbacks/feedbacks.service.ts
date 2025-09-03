import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PatientFeedback } from '../entities/patient-feedback.entity';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { CreationAttributes } from 'sequelize';
import { CreateClientFeedbackDto } from 'src/dto/create-client-feedback.dto';
import { ClientFeedback } from '../entities/client-feedback.entity'

@Injectable()
export class FeedbacksService {

      constructor(
    @InjectModel(PatientFeedback)
    private readonly feedbackModel: typeof PatientFeedback,

        @InjectModel(ClientFeedback)
    private clientFeedbackModel: typeof ClientFeedback,
  ) {}

  async createFeedback(createFeedbackDto: CreateFeedbackDto) {
    try {
      const feedback = await this.feedbackModel.create(createFeedbackDto as any);

      return {
        status: 1,
        message: 'Feedback submitted successfully',
        success: true,
      };
    } catch (error) {
      return {
        status: 0,
        message: 'Failed to submit feedback',
        success: false,
        error: error.message,
      };
    }
  }

  async findAllFeedbacks() {
    try {
      const feedbacks = await this.feedbackModel.findAll({
        order: [['createdAt', 'DESC']],
      });

      return {
        status: 1,
        message: 'Feedbacks fetched successfully',
        success: true,
        data: feedbacks,
      };
    } catch (error) {
      return {
        status: 0,
        message: 'Failed to fetch feedbacks',
        success: false,
        error: error.message,
      };
    }
  }


//   Client Feedback

  async createClientFeedback(createDto: CreateClientFeedbackDto) {
  try {
    const feedback = await this.clientFeedbackModel.create(createDto as any);

    return {
      status: 1,
      message: 'Client feedback submitted successfully',
      success: true,
    };
  } catch (error) {
    return {
      status: 0,
      message: 'Failed to submit client feedback',
      success: false,
      error: error.message,
    };
  }
}


  async findAllClientFeedback() {
    try {
      const feedbacks = await this.clientFeedbackModel.findAll();
      return {
        status: 1,
        message: 'Client feedbacks fetched successfully',
        success: true,
        data: feedbacks,
      };
    } catch (error) {
      return {
        status: 0,
        message: 'Failed to fetch feedbacks',
        success: false,
        error: error.message,
      };
    }
  }
}
