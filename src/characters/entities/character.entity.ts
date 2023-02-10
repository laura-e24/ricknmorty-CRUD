import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Character {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field({ nullable: true })
  @Column()
  name: string;

  @Field()
  @Column()
  status: string;

  @Field()
  @Column()
  species: string;

  @Field({ nullable: true })
  @Column()
  type: string;

  @Field()
  @Column()
  gender: string;

  @Column()
  @Field()
  origin: string;

  @Field()
  @Column()
  image: string;
}