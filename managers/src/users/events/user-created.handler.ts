import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from './user-created.event';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
    async handle({ data,subject }: UserCreatedEvent): Promise<void> {
        console.log('User created:',data);
    }
}