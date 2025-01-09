import { IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  id: string;

  @IsString()
  product: string;

  @IsNumber()
  quantity: number;
}
