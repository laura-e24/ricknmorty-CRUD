import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {

  }

  @Query(returns => [Post])
  posts() {
    return this.postsService.findAll()
  }

  @Query(returns => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id)
  }

  @Mutation(returns => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.createPost(postInput)
  }
}
