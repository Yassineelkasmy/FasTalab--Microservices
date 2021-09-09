import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { UserFactory } from './user.factory';
import { UsersController } from './users.controller';
import { UserCommandHandlers } from './commands';
import { UserDtoRepository } from './db/user-dto.repository';
import { UserEntityRepository } from './db/user-entity.repository';
import { UserSchemaFactory } from './db/user-schema.factory';
import { UserSchema } from './db/user.schema';
import { UserEventHandlers } from './events';
import { UserQueryHandlers } from './queries';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: UserSchema.name,
        schema: SchemaFactory.createForClass(UserSchema),
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UserEntityRepository,
    UserDtoRepository,
    UserSchemaFactory,
    UserFactory,
    ...UserCommandHandlers,
    ...UserEventHandlers,
    ...UserQueryHandlers,
  ],
})
export class UsersModule {}