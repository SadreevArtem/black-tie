import {
  IsBoolean,
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
  @IsString()
  currentPrice: string;
  @IsOptional()
  @IsString()
  services: string;
  @IsBoolean()
  published: boolean;
}
