import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserFactory } from '../../user.factory';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly userFactory: UserFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createUserRequest }: CreateUserCommand): Promise<void> {
    const { uid, fname, lname, email, phone, } = createUserRequest;
    const user = this.eventPublisher.mergeObjectContext(
      await this.userFactory.create(uid, fname, lname, email, phone,),
    );
    user.commit();
  }
}