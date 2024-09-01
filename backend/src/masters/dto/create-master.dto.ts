import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateMasterDto {
  @IsString()
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
