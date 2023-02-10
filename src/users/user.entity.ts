import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Character } from 'src/characters/entities/character.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column()
  alias: string;

  @ManyToOne(() => Character, character => character.id)
  @Field(() => Character)
  character: Character;

  @Column()
  @Field(() => Int)
  characterId: number;

  @OneToMany(() => Post, post => post.user)
  @Field(() => [Post], { nullable: true })
  posts: Post[];
}