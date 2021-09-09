import { EntityFactory } from "src/database/entity.factory";
import { UserEntityRepository } from "./db/user-entity.repository";
import { ObjectId } from 'mongodb';
import { User } from "./User";
import { Injectable } from "@nestjs/common";
import { UserCreatedEvent } from "./events/user-created.event";

@Injectable()
export class UserFactory implements EntityFactory<User> {
    constructor(
        private readonly userEntityRepository: UserEntityRepository,
    ){}

    async create(
        uid: string,
        fname: string,
        lname: string,
        email: string,
        phone: string,
    ): Promise<User> {
        const user = new User(
            new ObjectId().toHexString(),
            uid,
            fname,
            lname,
            email,
            phone,
        );

        await this.userEntityRepository.create(user);
        user.apply(new UserCreatedEvent(
        {
            uid:user.getUID(),
            _id:user.getId(),
            email:user.getEmail(),
            fnmae:user.getFname(),
            lnmae:user.getLname(),
            phone:user.getPhone(),
            status:'active',
        }
        ));
        return user;
    }
}