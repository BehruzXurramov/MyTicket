import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { District } from "src/district/models/district.models";
import { Region } from "src/region/models/region.models";
import { VenuePhoto } from "src/venue_photo/models/venue_photo.models";
import { VenueType } from "src/venue_type/models/venue_type.models";
import { VenueVenueType } from "src/venue_venue_type/models/venue_venue_type.entity";

interface IVenueCreationAttr {
  name: string;
  address: string;
  locatin: string;
  site: string;
  phone: string;
  schema: string[];
  regionId: number;
  districtId: number;
}

@Table({ tableName: "venue" })
export class Venue extends Model<Venue, IVenueCreationAttr> {
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
  address: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  site: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  schema: string[];

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  regionId: number;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  districtId: number;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;

  @HasMany(() => VenuePhoto)
  venue_photo: VenuePhoto[];

  @BelongsToMany(() => VenueType, () => VenueVenueType)
  venuetypes: VenueType[];
}
