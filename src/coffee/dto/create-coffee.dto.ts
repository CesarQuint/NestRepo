import { IsString, IsEnum } from 'class-validator';

export enum sizes {
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}

export class CreateCoffeeDto {
  @IsString()
  name: string;
  @IsEnum(sizes)
  size: sizes;
  @IsString()
  coffe_type: string;
}
