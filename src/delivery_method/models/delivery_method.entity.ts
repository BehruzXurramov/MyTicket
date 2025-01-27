import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IDeliveryMethodCreationAttr {
  name: string;
}

@Table({ tableName: "delivery_method" })
export class DeliveryMethod extends Model<
  DeliveryMethod,
  IDeliveryMethodCreationAttr
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
