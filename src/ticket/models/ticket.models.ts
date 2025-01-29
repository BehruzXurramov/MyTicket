import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Event } from "../../event/models/event.models";
import { Seat } from "../../seat/models/seat.models";
import { TicketStatus } from "../../ticket_status/models/ticket_status.models";

interface ITicketCreationAttr {
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  statusId: number;
  ticket_type: number;
}

@Table({ tableName: "ticket" })
export class Ticket extends Model<Ticket, ITicketCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
  })
  eventId: number;

  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
  })
  seatId: number;

  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
  })
  service_fee: number;

  @ForeignKey(() => TicketStatus)
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @Column({
    type: DataType.INTEGER,
  })
  ticket_type: number;

  @BelongsTo(() => Event)
  event: Event;

  @BelongsTo(() => Seat)
  seat: Seat;

  @BelongsTo(() => TicketStatus)
  status: TicketStatus;
}
