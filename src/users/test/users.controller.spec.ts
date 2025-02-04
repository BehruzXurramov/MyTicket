import { Test } from "@nestjs/testing";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../models/user.models";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStub } from "./stubs/user.stub";

jest.mock("../users.service");

describe("UsersController", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = moduleRef.get(UsersController);
    usersService = moduleRef.get(UsersService);
    jest.clearAllMocks();
  });
  it("User controller should be defined", () => {
    expect(usersController).toBeDefined();
  });

  it("User controller should be defined", () => {
    expect(usersService).toBeDefined();
  });

  describe("create user", () => {
    describe("when create user is called", () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
          value: userStub().value,
        };

        user = await usersController.create(createUserDto);
        console.log(user);
      });

      test("then it should call userService", () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });
      it("then it should return user", () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("Find all users", () => {
    describe("when findAll users is called", () => {
      let users: User[];
      beforeAll(async () => {
        users = await usersController.findAll();
      });
      test("then it should call usersServices findAll method", () => {
        expect(usersService.findAll).toHaveBeenCalled();
      });

      test("then it should return users", () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe("Find one user", () => {
    describe("when findOne user is called", () => {
      let user: User | null;
      let id: string;
      beforeAll(async () => {
        id = "1";
        user = await usersController.findOne(id);
      });

      test("then it should call usersServices findOne method", () => {
        expect(usersService.findOne).toHaveBeenCalledWith(userStub().id);
      });

      test("then it should return user", () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("remove one user", () => {
    describe("when remove user is called", () => {
      let result: Object;
      beforeAll(async () => {
        result = await usersController.remove(String(userStub().id));
      });

      test("then it should call usersServices remove method", () => {
        expect(usersService.remove).toHaveBeenCalledWith(userStub().id);
      });

      test("then it should return user", () => {
        expect(result).toEqual({ message: "Foydalanuvchi o'chirildi" });
      });
    });
  });
});
