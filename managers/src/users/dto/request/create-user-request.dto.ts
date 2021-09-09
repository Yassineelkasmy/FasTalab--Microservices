import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserRequest {

    @IsString()
    uid: string;
    @IsString()
    fname: string;
    @IsString()
    lname: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    phone: string;
}