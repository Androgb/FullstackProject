// src/users/user.controller.ts
import * as common from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@common.Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @common.Post()
  create(@common.Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @common.Get()
  findAll() {
    return this.usersService.findAll();
  }

  @common.Get(':id')
  findOne(@common.Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @common.Put(':id')
  update(@common.Param('id') id: string, @common.Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }

  @common.Delete(':id')
  remove(@common.Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
