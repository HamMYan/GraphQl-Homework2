import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { CREATE, JoiSchema, UPDATE } from 'nestjs-joi';
import * as Joi from 'joi'

@InputType()
export class CreateGroupInput {
  @JoiSchema([CREATE],Joi.number().optional())
  @JoiSchema([UPDATE],Joi.number().required())
  @Field(() => ID, { description: 'Group id' })
  id: number

  @JoiSchema([CREATE],Joi.string().required())
  @JoiSchema([UPDATE],Joi.string().optional())
  @Field(() => String, { description: 'Group Name' })
  name: string

  @JoiSchema([CREATE],Joi.string().required())
  @JoiSchema([UPDATE],Joi.string().optional())
  @Field(() => String, { description: 'Students Count' })
  studentCount: string
}
