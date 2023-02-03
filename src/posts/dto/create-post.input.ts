import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"

@InputType()
export class CreatePostInput {

  @IsNotEmpty()
  @Field()
  title: string;

  @Field({ nullable: true })
  content?: string;
}