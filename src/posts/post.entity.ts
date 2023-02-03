import { ObjectType, Field, Int } from "@nestjs/graphql"
import { User } from "src/users/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  // Column: indica que el Field se transformará en una columna de SQL
  // PrimaryGeneratedColumn: transformará el atributo en columna primary key
  // Field: indica que el atributo se convertirá a elemento de GraphQL
  // El resto de la sintaxis corresponde a NestJS y/o TypeScript

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field({ nullable: true })
  content?: string;

  // @ManyToOne(() => User, user => user.posts)
  @Field(() => User)
  author: User;
}