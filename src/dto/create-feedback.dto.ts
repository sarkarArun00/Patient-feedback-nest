import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  @IsString()
  patientName: string;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsString()
  efficiencyOfRegistration?: string;

  @IsOptional()
  @IsString()
  staffBehaviour?: string;

  @IsOptional()
  @IsString()
  cleanliness?: string;

  @IsOptional()
  @IsString()
  turnaroundTime?: string;

  @IsOptional()
  @IsString()
  clarityOfReports?: string;

  @IsOptional()
  @IsString()
  informationProvided?: string;

  @IsOptional()
  @IsString()
  overallExperience?: string;
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