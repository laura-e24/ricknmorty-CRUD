import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(@InjectRepository(Character) private charactersRepository: Repository<Character>) {}

  async findAll(): Promise<Character[]> {
   const isDBEmpty = await this.charactersRepository.query(`SELECT * FROM "character"`).then(res => res.length)
  
    if (isDBEmpty === 0) {
      const { results } = await axios({
        url: 'https://rickandmortyapi.com/graphql',
        method: 'post',
        data: {
          query: `
          query {
            characters {
              results {
                name
                gender
                type
                image
                species
                status
                origin {
                  name
                }
              }
            }
            }
          `
        }
      })
      .then((result) => {
        return result.data.data.characters
      });
    
      const characters = results.map(res => ({
        ...res,
        origin: res.origin.name
      }))
      await this.charactersRepository.createQueryBuilder("character").insert().into(Character).values(characters).execute()
    }
    return await this.charactersRepository.find()
  }
}
