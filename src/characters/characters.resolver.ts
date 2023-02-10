import { Query, Resolver } from '@nestjs/graphql';
import { CharactersService } from './characters.service';
import { Character } from './entities/character.entity';

@Resolver()
export class CharactersResolver {
  constructor(private charactersService: CharactersService) {}

  @Query(() => [Character], { name: "getAllCharacters" })
  findAll() {
    return this.charactersService.findAll()
  }
}
