import { Stan } from 'node-nats-streaming';
import { IEvent } from './i_event';
export abstract class Publisher<TEvent extends IEvent> {
    abstract subject: TEvent['subject'];
    private client: Stan;

    constructor(client: Stan) {
        this.client = client;
    }

    publish(data: TEvent['data']){
        this.client.publish(this.subject,JSON.stringify(data), ()=>{
            console.log('Event published!.');
        });
    }
    
}