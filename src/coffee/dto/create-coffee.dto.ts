import { IsString } from 'class-validator';

enum sizes {
  'small',
  'medium',
  'large',
}

export class CreateCoffeeDto {
  @IsString()
  name: string;
  size: sizes;
  @IsString()
  coffe_type: string;
}
