import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.userHash(createUserDto.password);

    await this.userModel.create(createUserDto);
  }

  async findOne(username: string) {
    const findedUser = await this.userModel.findOne({ username: username });
    return findedUser;
  }

  findAll() {
    const findedUsers = this.userModel.find().select('-password');
    return findedUsers;
  }

  private async userHash(pass) {
    const saltOrRounds = 10;
    const hashedPass = await bcrypt.hash(pass, saltOrRounds);
    return hashedPass;
  }
}
