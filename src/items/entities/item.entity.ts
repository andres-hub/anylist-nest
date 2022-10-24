import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Column, Double, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'items' })
@ObjectType()
export class Item {

  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: String })
  @Field(() => String)
  name: string;

  @Column({ type: Number })
  @Field(() => Float)
  quantity: number;

  @Column({ type: String, nullable: true })
  @Field(() => String, { nullable: true })
  quantityUnits?: string;




}
