import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
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
}
