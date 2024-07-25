import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from "joi"

@InputType()
export class UpdateGroupInput{
  @JoiSchema(Joi.number().required())
  @Field(() => ID, { description: 'Group id' })
  id: number

  @JoiSchema(Joi.string().optional())
  @Field(() => String, { description: 'Group Name' })
  name: string

  @JoiSchema(Joi.string().optional())
  @Field(() => String, { description: 'Students Count' })
  studentCount: string
}
