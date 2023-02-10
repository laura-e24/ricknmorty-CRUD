import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UsersService } from './users.service';


@Resolver(() => User)
export class UsersResolver {
 
  constructor(private usersService: UsersService) {}

  @Query(() => [User], { name: "getAllUsers" })
  findAll() {
    return this.usersService.findAll()
  }

  @Mutation(() => User, { name: "createUser" })
  create(@Args('user') user: CreateUserInput) {
    return this.usersService.create(user)
  }
}
