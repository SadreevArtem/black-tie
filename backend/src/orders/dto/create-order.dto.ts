import { IsOptional, IsString, Length } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @Length(2, 30)
  name: string;
  @IsString()
  @IsOptional()
  phone: string;
}
