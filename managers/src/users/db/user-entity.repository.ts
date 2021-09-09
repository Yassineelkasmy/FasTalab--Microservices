import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseEntityRepository } from '../../database/base-entity.repository';
import { User } from '../User';
import { UserSchema } from '../db/user.schema';
import { UserSchemaFactory } from '../db/user-schema.factory';

@Injectable()
export class UserEntityRepository extends BaseEntityRepository<
  UserSchema,
  User
> {
  constructor(
    @InjectModel(UserSchema.name)
    userModel: Model<UserSchema>,
    userSchemaFactory: UserSchemaFactory,
  ) {
    super(userModel, userSchemaFactory);
  }
}