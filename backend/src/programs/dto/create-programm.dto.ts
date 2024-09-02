import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateProgrammDto {
  @IsString()
  @Length(2, 30)
  name: string;
  @IsString()
  @IsOptional()
  @Length(2, 200)
  description: string;
  @IsOptional()
  @IsUrl()
  image: string;
  @IsOptional()
  @IsNumber()
  currentPrice: string;
  @IsBoolean()
  published: boolean;
}
