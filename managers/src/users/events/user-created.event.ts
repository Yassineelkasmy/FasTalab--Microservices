import { Subjects } from "src/nats/subjects";
import { IEvent  } from "../../nats/i_event";

export class UserCreatedEvent implements IEvent{
    subject: Subjects.UserCreated;
    data : {
        uid: string,
        _id: string,
        email: string,
        fnmae: string, 
        lnmae: string,
        phone: string,
        status: string, 
    }
    constructor(data: UserCreatedEvent['data']){
        this.data = data;
    }
    
}
