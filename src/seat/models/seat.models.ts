import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.models";
import { SeatType } from "../../seat_type/models/seat_type.model";

interface ISeatCreationAttr {
  sector: number;
  row_number: number;
  number: number;
  venueId: number;
  seat_typeId: number;
  location_in_schema: string;
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, ISeatCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  sector: number;

  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;

  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
  })
  seat_typeId: number;

  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => SeatType)
  seat_type: SeatType;
}
