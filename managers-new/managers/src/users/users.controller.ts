import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserDto } from './user.dto';
import { CreateUserCommand } from './commands/create-user/create-user.command';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { UsersQuery } from './queries/users.query';

@Controller('users')
export class UsersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  async getUser(@Param('id') userId: string): Promise<void> {}

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return this.queryBus.execute<UsersQuery, UserDto[]>(new UsersQuery());
  }

  @Post()
  async createUser(
    @Body() createUserRequest: CreateUserRequest,
  ): Promise<void> {
    await this.commandBus.execute<CreateUserCommand, void>(
      new CreateUserCommand(createUserRequest),
    );
  }

  
}
