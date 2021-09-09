import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntitySchemaFactory } from '../../database/entity-schema.factory';
import { User } from '../User';
import { UserSchema } from './user.schema';

@Injectable()
export class UserSchemaFactory
  implements EntitySchemaFactory<UserSchema, User> {
  create(user: User): UserSchema {
    return {
        _id: new ObjectId(user.getId()),
        uid: user.getUID(),
        fname: user.getFname(),
        lname: user.getLname(),
        email: user.getEmail(),
        phone: user.getPhone(),
    };
  }

  createFromSchema(userSchema: UserSchema): User {
    return new User(
        userSchema._id.toHexString(),
        userSchema.uid,
        userSchema.fname,
        userSchema.lname,
        userSchema.email,
        userSchema.phone,
    );
  }
}