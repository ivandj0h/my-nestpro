import { Controller, Get } from '@nestjs/common';

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
}
