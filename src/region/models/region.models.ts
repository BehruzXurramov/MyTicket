import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "src/district/models/district.models";
import { Venue } from "src/venue/models/venue.models";

interface IRegionCreationAttr {
  name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, IRegionCreationAttr> {
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

  @HasMany(() => District)
  district: District[];

  @HasMany(() => Venue)
  venue: Venue[];
}
