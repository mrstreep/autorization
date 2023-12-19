import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/user.create.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) { }

  async createUser(dto: CreateUserDto) {
    const newUser = await this.userRepository.create(dto);
    return newUser;
  }

  findOne<T>(T: number | string) {
    if (typeof T == 'number') {
      return this.userRepository.findOne({ where: { id: T } });
    }
    return this.userRepository.findOne({ where: { email: T } });
  }

  async getUserById(id: number) {
    const user = await this.findOne(id);
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.findOne(email);
    return user;
  }

  async getAllUsers() {
    const allUsers = await this.userRepository.findAll();
    return allUsers;
  }

  async removeUserById(id: number) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
