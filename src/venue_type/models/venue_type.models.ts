import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.models";
import { VenueVenueType } from "src/venue_venue_type/models/venue_venue_type.entity";

interface IVenueTypeCreationAttr {
  name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, IVenueTypeCreationAttr> {
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

  @BelongsToMany(() => Venue, () => VenueVenueType)
  venue: Venue[];
}
