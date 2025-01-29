import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.models";
import { CartStatus } from "../../cart_status/models/cart_status.models";

interface ICartCreationAttr {
  customerId: number;
  statusId: number;
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @ForeignKey(() => CartStatus)
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => CartStatus)
  cart_status: CartStatus;
}
