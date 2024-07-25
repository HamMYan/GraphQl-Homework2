import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { CREATE, JoiSchema, UPDATE } from 'nestjs-joi';
import * as Joi from "joi"


@InputType()
export class CreateStudentInput {
  @JoiSchema(Joi.string().required())
  @Field(() => String, { description: 'User Name' })
  name: string

  @JoiSchema(Joi.string().required())
  @Field(() => String, { description: 'User Surname' })
  surname: string
}
