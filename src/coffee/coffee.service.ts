import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coffee } from './schemas/coffee.schema';
import { Model } from 'mongoose';

@Injectable()
export class CoffeeService {
  constructor(@InjectModel(Coffee.name) private coffeeModel: Model<Coffee>) {}

  async create(createCoffeeDto: CreateCoffeeDto) {
    try {
      const newCofee = new this.coffeeModel(createCoffeeDto);

      return await newCofee.save();
    } catch (error) {
      throw new BadRequestException('Error', {
        cause: error,
        description: 'idk',
      });
    }
  }

  findAll() {
    return `This action returns all coffee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coffee`;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return `This action updates a #${id} coffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
