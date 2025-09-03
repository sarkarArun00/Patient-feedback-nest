import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto } from '../dto/create-feedback.dto';
import { CreateClientFeedbackDto } from 'src/dto/create-client-feedback.dto';


@Controller('feedbacks')
export class FeedbacksController {

    constructor(private readonly feedbackService: FeedbacksService) { }

    @Post('patient-feedback')
    async create(@Body() createFeedbackDto: CreateFeedbackDto) {
        return this.feedbackService.createFeedback(createFeedbackDto);
    }

    @Get('getAllPatientFeedback')
    async findAll() {
        return this.feedbackService.findAllFeedbacks();
    }

    @Post('client-feedback')
    async createClientFeedback(@Body() createDto: CreateClientFeedbackDto) {
        return this.feedbackService.createClientFeedback(createDto);
        try {
            const feedback = await this.feedbackService.createClientFeedback(createDto);
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

    // 👉 Get all client feedbacks
    @Get('getAllClientFeedback')
    async findAllClientFeedback() {
        return this.feedbackService.findAllClientFeedback();
        try {
            const feedbacks = await this.feedbackService.findAllClientFeedback();
            return {
                status: 1,
                message: 'Client feedbacks fetched successfully',
                success: true,
                data: feedbacks.data,
            };
        } catch (error) {
            return {
                status: 0,
                message: 'Failed to fetch client feedbacks',
                success: false,
                error: error.message,
            };
        }
        
    }
}

