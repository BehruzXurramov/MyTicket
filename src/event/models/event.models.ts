import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { EventType } from "../../event_type/models/event_type.models";
import { HumanCategory } from "../../human_category/models/human_category.models";
import { Venue } from "../../venue/models/venue.models";
import { Lang } from "../../lang/models/lang.model";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_typeId: number;
  human_categoryId: number;
  venueId: number;
  lang_id: number;
  release_date: string;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventCreationAttr> {
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

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.DATE,
  })
  start_date: string;

  @Column({
    type: DataType.DATE,
  })
  start_time: string;

  @Column({
    type: DataType.DATE,
  })
  finish_date: string;

  @Column({
    type: DataType.DATE,
  })
  finish_time: string;

  @Column({
    type: DataType.STRING(500),
  })
  info: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  event_typeId: number;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
  })
  human_categoryId: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @Column({
    type: DataType.DATE,
  })
  release_date: string;

  @BelongsTo(() => EventType)
  event_type: EventType;

  @BelongsTo(() => HumanCategory)
  human_category: HumanCategory;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => Lang)
  lang: Lang;
}
