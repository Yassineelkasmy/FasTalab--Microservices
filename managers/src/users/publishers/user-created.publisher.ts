import { UserCreatedEvent } from "../events/user-created.event";
import { Publisher } from "../../nats/publisher";
import { Subjects } from "../../nats/subjects";

export class UserCreatedPublisher extends Publisher<UserCreatedEvent>{
    readonly subject = Subjects.UserCreated;

}