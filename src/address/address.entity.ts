import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  country_code: number;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  stress_number: number;

  @Field()
  @Column()
  stress_name: string;

  @Field()
  @Column({ nullable: true })
  @CreateDateColumn()
  created_at!: Date;

  @Field()
  @Column({ nullable: true })
  @CreateDateColumn()
  updated_at!: Date;
}
