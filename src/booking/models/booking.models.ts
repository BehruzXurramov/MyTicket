import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { DeliveryMethod } from "src/delivery_method/models/delivery_method.entity";
import { PaymentMethod } from "src/payment_method/models/payment_method.models";
import { Cart } from "../../cart/models/cart.models";

interface IBookingCreationAttr {
  cartId: number;
  payment_methodId: number;
  delivery_methodId: number;
  discount_couponId: number;
  statusId: number;
}

@Table({ tableName: "booking" })
export class Booking extends Model<Booking, IBookingCreationAttr> {
  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;

  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
  })
  payment_methodId: number;

  @ForeignKey(() => DeliveryMethod)
  @Column({
    type: DataType.INTEGER,
  })
  delivery_methodId: number;

  @Column({
    type: DataType.INTEGER,
  })
  discount_couponId: number;

  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @BelongsTo(() => PaymentMethod)
  payment_method: PaymentMethod;

  @BelongsTo(() => DeliveryMethod)
  delivery_method: DeliveryMethod;
}
