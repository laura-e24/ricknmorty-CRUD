import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, ArrayNotEmpty } from "class-validator"
import { Post } from 'src/posts/post.entity';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  status: string;

  @IsNotEmpty()
  @Field()
  species: string;

  @Field()
  type: string;

  @Field()
  gender: string;

  // @Field()
  // origin: string;

  @Field()
  image: string;

  // @Field(() => [Post])
  // posts: Post[];
}
