import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientFeedbackDto {
  @IsNotEmpty()
  @IsString()
  clientName: string;

  @IsNotEmpty()
  @IsString()
  clientCode: string;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsString()
  communication?: string;  // Clarity and effectiveness of communication with our team

  @IsOptional()
  @IsString()
  reliabilityOfTests?: string;  // Range & reliability of tests offered

  @IsOptional()
  @IsString()
  turnaroundTime?: string;  // Turnaround time & accuracy of reports

  @IsOptional()
  @IsString()
  problemResolution?: string;  // Problem resolution & support

  @IsOptional()
  @IsString()
  digitalIntegration?: string;  // Digital integration & report delivery system

  @IsOptional()
  @IsString()
  pricingTransparency?: string;  // Transparency in pricing & billing process

  @IsOptional()
  @IsString()
  overallSatisfaction?: string;  // Overall partnership satisfaction & suggestions

  @IsOptional()
  @IsString()
  coldChainMaintenance?: string;  // Cold chain maintenance during sample transportation
}
