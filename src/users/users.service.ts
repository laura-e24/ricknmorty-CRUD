import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      relations: ["posts", "character"]
    })
  }

  async create(user: CreateUserInput): Promise<User> {
    let usr = this.usersRepository.create(user)
    return this.usersRepository.save(usr)
  }
}
