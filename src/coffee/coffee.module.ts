import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';

import { LoggerMiddleware } from '../middleware/logger';

import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './schemas/coffee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Coffee.name, schema: CoffeeSchema }]),
  ],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
