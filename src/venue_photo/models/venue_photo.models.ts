import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "src/venue/models/venue.models";

interface IVenuePhotoCreationAttr {
  url: string;
  venueId: number;
}

@Table({ tableName: "venue_photo" })
export class VenuePhoto extends Model<VenuePhoto, IVenuePhotoCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  url: string

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER
  })
  venueId: number

  @BelongsTo(() => Venue)
  venue: Venue
}
