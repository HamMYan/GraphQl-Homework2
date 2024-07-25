import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Student } from 'src/student/entities/student.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Group {
  @Field(() => ID, { description: 'Group id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Group Name' })
  @Column()
  name: string

  @Field(() => Float, { description: 'Users Count' })
  @Column()
  studentsCount: number;

  @OneToMany(type => Student, student => student.group,{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  student: Student
}
