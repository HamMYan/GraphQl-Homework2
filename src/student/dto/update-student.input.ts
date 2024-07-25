import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { JoiSchema } from 'nestjs-joi';
import * as Joi from "joi"

@InputType()
export class UpdateStudentInput{
  @JoiSchema(Joi.number().required())
  @Field(() => ID, { description: 'User id' })
  id: number
  
  @JoiSchema(Joi.string().optional())
  @Field(() => String, { description: 'User Name' })
  name: string


  @JoiSchema(Joi.string().optional())
  @Field(() => String, { description: 'User Surname' })
  surname: string
}
