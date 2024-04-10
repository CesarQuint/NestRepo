import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';

import { LoggerMiddleware } from '../middleware/logger';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
