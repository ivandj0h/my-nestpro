import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@admin.com',
      age: 43,
    },
    {
      id: 2,
      username: 'user',
      email: 'user@user.com',
      age: 23,
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

  // Get a single User
  fetchSingleUser(userId: number) {
    return this.fakeUsers.find((user) => user.id === userId);
  }

  // Delete a single User
  deleteUser(userId: number) {
    const userIndex = this.fakeUsers.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      this.fakeUsers.splice(userIndex, 1);
    }
    return this.fakeUsers;
  }
}
