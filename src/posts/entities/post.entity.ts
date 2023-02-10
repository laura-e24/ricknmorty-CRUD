import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field({ nullable: true })
  content?: string;

  @ManyToOne(() => User, user => user.posts)
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => Int)
  userId: number;
}
