import { IdentifiableEntitySchema } from "src/database/identifiable-entity.schema";
import { Prop, Schema } from '@nestjs/mongoose';


@Schema({versionKey: false, collection: 'managers'})
export class UserSchema extends IdentifiableEntitySchema {
    
    @Prop()
    readonly uid: string;
    @Prop()
    readonly fname: string;
    @Prop()
    readonly lname: string;
    @Prop()
    readonly email: string;
    @Prop() 
    readonly phone: string; 
}