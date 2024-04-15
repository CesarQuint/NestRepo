import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoffeeInferface = HydratedDocument<Coffee>;

@Schema()
export class Coffee {
  @Prop()
  name: string;

  @Prop()
  size: string;

  @Prop()
  coffee_type: string;
}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee);
