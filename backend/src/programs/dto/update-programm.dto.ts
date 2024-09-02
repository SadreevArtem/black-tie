import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CreateProgrammDto } from './create-programm.dto';

export class UpdateProgrammDto extends PartialType(CreateProgrammDto) {
  @IsString()
  @IsOptional()
  @Length(2, 30)
  name: string;
  @IsString()
  @IsOptional()
  @Length(2, 200)
  description: string;
  @IsOptional()
  @IsUrl()
  image: string;
  @IsNumber()
  currentPrice: string;
  @IsBoolean()
  published: boolean;
}
