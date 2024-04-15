import { IsString, IsEnum } from 'class-validator';

enum sizes {
  'small',
  'medium',
  'large',
}

export class CreateCoffeeDto {
  @IsString()
  name: string;
  @IsEnum(sizes)
  size: sizes;
  @IsString()
  coffe_type: string;
}
