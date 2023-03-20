import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Get All Users
  @Get()
  getAllUsers() {
    return this.usersService.fetchAllUsers();
  }

  // Post a new User
  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  createNewUser(@Body() userData: CreateUserDto) {
    console.log(userData);

    return this.usersService.createNewUser(userData);
  }

  // Get a single User (get param)
  @Get(':id')
  getSingleUser(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    const user = this.usersService.fetchSingleUser(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Delete('delete/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }
}
