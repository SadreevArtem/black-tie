import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CreateMasterDto } from './create-master.dto';

export class UpdateMasterDto extends PartialType(CreateMasterDto) {
  @IsString()
  @IsOptional()
  @Length(2, 30)
  name: string;
  @IsOptional()
  @IsUrl()
  avatar: string;
  @IsOptional()
  @IsUrl()
  imageSecond: string;
  @IsOptional()
  @IsUrl()
  imageThird: string;
  @IsOptional()
  @IsNumber()
  age: number;
  @IsOptional()
  @IsNumber()
  height: number;
  @IsOptional()
  @IsNumber()
  weight: number;
  @IsOptional()
  @IsNumber()
  size: number;
  @IsBoolean()
  published: boolean;
}
