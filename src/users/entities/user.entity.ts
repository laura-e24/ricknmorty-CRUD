import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  status: string;

  @Column()
  @Field()
  species: string;

  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  gender: string;

  // @Column()
  // @Field()
  // origin: string;

  @Column()
  @Field()
  image: string;

  // @OneToMany(() => Post, post => post.author)
  // @Field(() => [Post], { nullable: true })
  // posts: Post[];
}
