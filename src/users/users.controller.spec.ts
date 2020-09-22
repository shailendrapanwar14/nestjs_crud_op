
import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [UsersController],
        providers: [UsersService],
      }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe('showAll', () => {
    it('should return an array of users', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'showAll').mockImplementation(() => result);

      expect(await usersController.showAllUsers()).toBe(result);
    });
  });
  describe('create', () => {
    it('should create user', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'create').mockImplementation(() => result);

      expect(await usersController.createUsers(@Body() data: UsersDTO).toBe(result);
    });
  });

  describe('update', () => {
    it('should update user', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'update').mockImplementation(() => result);

      expect(await usersController.uppdateUser()).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete user', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'delete').mockImplementation(() => result);

      expect(await usersController.deleteUser(@Param('id'), id: number)).toBe(result);
    });
  });
});

