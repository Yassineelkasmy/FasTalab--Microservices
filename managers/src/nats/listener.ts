import { Stan, Message } from 'node-nats-streaming';
import { IEvent } from './event';



export abstract class Listener<TEvent extends IEvent> {

    abstract subject: TEvent['subject'];
    abstract queueGroupname: string;
    abstract onMessage(data: TEvent['data'], msg: Message): void;

    constructor(client: Stan){
        this.client = client;
    }
    private client: Stan;
    protected ackWait = 5 * 1000;

    subscriptionOptions(){
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupname);
    }

    listen(){
        const subscription = this.client.subscribe(
            this.subject,
            this.queueGroupname,
            this.subscriptionOptions(),
        );

        subscription.on('message',  (msg: Message)=> {
            console.log(
                `Message received: ${this.subject} / ${this.queueGroupname}`
            );

            const parsedData = this.parseMessage(msg);

            this.onMessage(parsedData, msg);

        });
      
    }

    parseMessage( msg: Message){
        const data = msg.getData();

        return typeof data === 'string'
        ? JSON.parse(data)
        : JSON.parse(data.toString('utf8'));
    }
}