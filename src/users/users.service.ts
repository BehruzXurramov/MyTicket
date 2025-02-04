import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.models";
import { RolesService } from "src/roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { Role } from "../roles/models/role.models";
import { ActivateUserDto } from "./dto/activate-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly roleService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.roleService.findRoleByValue(createUserDto.value);

    if (!role) {
      throw new NotFoundException("Role not found");
    }
    await newUser.$set("roles", [role.id]);
    await newUser.save();
    newUser.roles = [role];
    return newUser;
  }

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.userModel.findByPk(addRoleDto.userId);
    const role = await this.roleService.findRoleByValue(addRoleDto.value);

    if (role && user) {
      await user.$add("roles", role.id);
      const updatedUser = await this.userModel.findByPk(addRoleDto.userId, {
        include: { all: true },
      });
      return updatedUser;
    }

    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");
  }

  async removeRole(addRoleDto: AddRoleDto) {
    const user = await this.userModel.findByPk(addRoleDto.userId);
    const role = await this.roleService.findRoleByValue(addRoleDto.value);

    if (role && user) {
      await user.$remove("roles", role.id);
      const updatedUser = await this.userModel.findByPk(addRoleDto.userId, {
        include: { all: true },
      });
      return updatedUser;
    }

    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);
    if (user) {
      user.is_active = true;
      await user.save();
      return user;
    }

    throw new NotFoundException("Foydalanuvchi topilmadi");
  }

  async deActivateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);
    if (user) {
      user.is_active = false;
      await user.save();
      return user;
    }

    throw new NotFoundException("Foydalanuvchi topilmadi");
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({
      where: { email },
      include: {
        model: Role,
        attributes: ["value"],
        through: { attributes: [] },
      },
    });
  }

  findOne(id: number) {
    return this.userModel.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
