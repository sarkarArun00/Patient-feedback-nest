import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { CreateFeedbackDto, UpdateFeedbackCommentDto } from '../dto/create-feedback.dto';
import { CreateClientFeedbackDto } from 'src/dto/create-client-feedback.dto';
import { CreateEmployeeFeedbackDto } from 'src/dto/create-employee-feedback.dto';


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
        // return this.feedbackService.createClientFeedback(createDto);
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
        // return this.feedbackService.findAllClientFeedback();
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

    @Post('employee-feedback')
    async createEmpFeedback(@Body() createDto: CreateEmployeeFeedbackDto) {
        try {
            const feedback = await this.feedbackService.create(createDto);
            return {
                status: 1,
                message: 'Employee feedback submitted successfully',
                success: true,
            };
        } catch (error) {
            return {
                status: 0,
                message: 'Failed to submit employee feedback',
                success: false,
                error: error.message,
            };
        }
    }

    @Get('geAllEmpFeedback')
    async getAllEmpFeedback() {
        try {
            const feedbacks = await this.feedbackService.findAll();
            return {
                status: 1,
                message: 'Employee feedbacks fetched successfully',
                success: true,
                data: feedbacks,
            };
        } catch (error) {
            return {
                status: 0,
                message: 'Failed to fetch employee feedbacks',
                success: false,
                error: error.message,
            };
        }
    }

    @Post('admin-comment')
    async addAdminComment(@Body() dto: UpdateFeedbackCommentDto) {
        return this.feedbackService.addAdminComment(dto);
    }
}

