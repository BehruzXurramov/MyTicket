import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITicketStatusCreationAttr {
  name: string;
}

@Table({ tableName: "ticket_status" })
export class TicketStatus extends Model<
  TicketStatus,
  ITicketStatusCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
  })
  name: string;
}
