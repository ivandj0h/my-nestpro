import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  // Get All Users
  @Get()
  getAllUsers() {
    return [
      {
        id: 1,
        username: 'admin',
        email: 'admin@admin.com',
      },
      {
        id: 2,
        username: 'user',
        email: 'user@user.com',
      },
    ];
  }

  // Get All User's Posts
  @Get('posts')
  getAllUsersPosts() {
    return [
      {
        id: 1,
        userId: 1,
        title: 'Post 1',
        body: 'Post 1 Body',
      },
      {
        id: 2,
        userId: 1,
        title: 'Post 2',
        body: 'Post 2 Body',
      },
      {
        id: 3,
        userId: 2,
        title: 'Post 3',
        body: 'Post 3 Body',
      },
    ];
  }

  // Post a new User
  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  createNewUser(@Body() userData: CreateUserDto) {
    console.log(userData);

    return {};
  }

  // Get a single User (get param)
  @Get(':id')
  getSingleUser(@Param('id', ParseIntPipe) id: number) {
    console.log(id);

    return {
      id,
    };
  }

  @Delete('delete/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `User ${id} deleted`,
    };
  }
}
function createNewUser(): any {
  throw new Error('Function not implemented.');
}
