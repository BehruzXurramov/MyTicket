import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.models";
import { Cart } from "../../cart/models/cart.models";

interface ICartItemCreationAttr {
  ticketId: number;
  cartId: number;
  quantity: number;
}

@Table({ tableName: "cart_item" })
export class CartItem extends Model<CartItem, ICartItemCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;

  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @BelongsTo(() => Cart)
  cart: Cart;
}
