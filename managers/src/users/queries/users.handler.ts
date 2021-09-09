import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserDto } from '../user.dto';
import { UserDtoRepository } from '../db/user-dto.repository';
import { UsersQuery } from './users.query';

@QueryHandler(UsersQuery)
export class UsersHandler implements IQueryHandler<UsersQuery> {
  constructor(private readonly userDtoRepository: UserDtoRepository) {}

  async execute(): Promise<UserDto[]> {
    return this.userDtoRepository.findAll();
  }
}