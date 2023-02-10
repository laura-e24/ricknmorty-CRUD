import { InputType, Field } from "@nestjs/graphql"

@InputType()
export class CreateUserInput  {
  @Field()
  characterId: number;
  @Field()
  alias: string;
}