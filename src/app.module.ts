import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.example.env',
    }),
    CoffeeModule,
    //* Properties limited
    // ConfigModule.forFeature(databaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
