import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './entities/car.entity';
import { UpdateCarDto } from './dto/update-car.dto';
import { CreateCarDto } from './dto/create-car.dto';
// import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private car: Model<Car>, // ,  private category: Model<Category>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    this.car.create(createCarDto);
  }

  findAll() {
    return this.car.find();
  }

  findById(id: number) {
    return this.car.findById(id);
  }

  // findByCategory(id: number) {
  //   return this.category.findOne({ _id: id, available: true });
  // }

  update(id: number, updateData: UpdateCarDto) {
    return this.car.findByIdAndUpdate(id, updateData);
  }

  remove(id: number) {
    return this.car.findByIdAndDelete(id);
  }
}
