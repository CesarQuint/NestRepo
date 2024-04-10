enum sizes {
  'small',
  'medium',
  'large',
}

export class CreateCoffeeDto {
  name: string;
  size: sizes;
  coffe_type: string;
}
