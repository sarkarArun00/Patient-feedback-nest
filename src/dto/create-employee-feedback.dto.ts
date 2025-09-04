// create-employee-feedback.dto.ts
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeFeedbackDto {
  @IsNotEmpty()
  @IsString()
  staffName: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsString()
  designation: string;

  @IsOptional()
  @IsString()
  remarks?: string;
}
