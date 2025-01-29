import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRole } from "src/users/models/user-role.models";
import { User } from "src/users/models/user.models";

interface IRolesCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRolesCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    unique: true,
  })
  value: string;

  @Column({
    type: DataType.STRING(50),
  })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
