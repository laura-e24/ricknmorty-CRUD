import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import axios from 'axios';
import { Post } from 'src/posts/post.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  
  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  async findAll(): Promise<User[]> {
    const { results } = await axios({
      url: 'https://rickandmortyapi.com/graphql',
      method: 'post',
      data: {
        query: `
        query Users {
          characters {
            results {
              name
              gender
              type
              image
              species
              status
            }
          }
          }
        `
      }
    })
    .then((result) => {
      return result.data.data.characters
    });
  
    // results.forEach(async res => {
    //   await this.userRepository.create(res)
    //   await this.userRepository.save(res)
    // })
 
    // return await this.userRepository.find()
    this.userRepository.createQueryBuilder().insert().into(User).values(results).execute()
    return await this.userRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
