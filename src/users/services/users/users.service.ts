import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
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

  // Get All Users
  fetchAllUsers() {
    return this.fakeUsers;
  }

  // Create a new User
  createNewUser(userData) {
    const newUser = {
      id: this.fakeUsers.length + 1,
      ...userData,
    };

    this.fakeUsers.push(newUser);

    return newUser;
  }
}
