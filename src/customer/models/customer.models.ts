import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Lang } from "src/lang/models/lang.model";

interface ICustomerCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  bith_date: string;
  gender: string;
  langId: number;
  hashed_refresh_token: string;
}

@Table({tableName: "customer"})
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.DATE,
  })
  birth_date: string;

  @Column({
    type: DataType.ENUM("erkak", "ayol"),
  })
  gender: string;

  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
  })
  langid: number;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
