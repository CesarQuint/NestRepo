import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
    }),
    CoffeeModule,
    //* Properties limited
    // ConfigModule.forFeature(databaseConfig)
    MongooseModule.forRoot(
      `mongodb+srv://root:${process.env.MONGO}@cluster0.oomkfim.mongodb.net/coffee`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
