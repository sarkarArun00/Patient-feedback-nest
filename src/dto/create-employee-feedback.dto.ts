// create-employee-feedback.dto.ts
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeFeedbackDto {
  @IsNotEmpty()
  @IsString()
  staffName: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsString()
  empCode: string;

  @IsNotEmpty()
  @IsString()
  designation: string;

  @IsOptional()
  @IsString()
  remarks?: string;
}


export class UpdateFeedbackCommentDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsIn(['patient', 'client', 'employee'])
  feedbackType: string;

  @IsOptional()
  @IsString()
  adminComment?: string;
}