import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { PostsModule } from './posts/posts.module';
import { CharactersModule } from './characters/characters.module';
import { Post } from './posts/entities/post.entity';
import { Character } from './characters/entities/character.entity';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  }), 
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 8000,
    username: 'postgres',
    password: 'localhost',
    database: 'ricknmorty',
    entities: [
      // __dirname + "/**/*.entity{.ts,.js}"
      User,
      Post,
      Character
    ],
    synchronize: true,
  }),
  UsersModule,
  PostsModule,
  CharactersModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
