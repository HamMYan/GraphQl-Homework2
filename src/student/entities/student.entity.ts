import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Group } from 'src/group/entities/group.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  @Field(() => ID, { description: 'User id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'User Name' })
  @Column()
  name: string

  @Field(() => String, { description: 'User Surname' })
  @Column()
  surname: string

  @ManyToOne(type => Group, group => group.student,{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  group: Group
}
