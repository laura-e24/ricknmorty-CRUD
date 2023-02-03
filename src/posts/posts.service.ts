import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) {

  }
  async findAll(): Promise<Post[]> {
    return this.postsRepository.find()
  }

  async findOne(id: number): Promise<Post> {
    return await this.postsRepository.findOne({
      where: {
        id
      }
    })
  }

  async createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post)
    return await this.postsRepository.save(newPost)
  }
}
