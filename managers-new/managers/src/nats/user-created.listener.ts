import { Stan, Message } from 'node-nats-streaming';
import { UserCreatedEvent } from 'src/users/events/user-created.event';
import { Listener } from './listener';
import { Subjects } from './subjects';
export class UserCreatedListener extends Listener<UserCreatedEvent>{

    //We provided the type annotation so TS makes sure that
    // we can`t change the type furthermore in our code .
    // In fact this type annotaion is necessary [Error-Prone]
    //subject: Subjects.UserCreated = Subjects.UserCreated;

    readonly subject = Subjects.UserCreated;
    queueGroupname = 'managers';

    onMessage(data: UserCreatedEvent['data'], msg: Message) {
        console.log('Event Data');

        msg.ack();
    }
    

}

