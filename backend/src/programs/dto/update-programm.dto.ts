import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
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
  @Length(2, 300)
  description: string;
  @IsOptional()
  @IsUrl()
  image: string;
  @IsOptional()
  @IsString()
  currentPrice: string;
  @IsOptional()
  @IsString()
  services: string;
  @IsOptional()
  @IsBoolean()
  published: boolean;
}
