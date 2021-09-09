import { ObjectId } from 'mongodb';

export class UserDto{
    readonly _id: ObjectId;
    readonly uid: string;
    readonly fname: string;
    readonly lname: string;
    readonly email: string;
    readonly phone: string;
}