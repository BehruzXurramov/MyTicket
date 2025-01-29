import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

interface IEventTypeCreationAttr {
  name: string;
  parent_event_typeId: number;
}

@Table({ tableName: "event_type" })
export class EventType extends Model<EventType, IEventTypeCreationAttr> {
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

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_typeId: number;

  @HasMany(() => EventType)
  eveny_types: EventType[]
}
