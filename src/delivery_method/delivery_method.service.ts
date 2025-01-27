import { Injectable } from "@nestjs/common";
import { CreateDeliveryMethodDto } from "./dto/create-delivery_method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery_method.dto";
import { InjectModel } from "@nestjs/sequelize";
import { DeliveryMethod } from "./models/delivery_method.entity";

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod)
    private deliveryMethodModel: typeof DeliveryMethod
  ) {}

  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodModel.create(createDeliveryMethodDto);
  }

  findAll() {
    return this.deliveryMethodModel.findAll();
  }

  findOne(id: number) {
    return this.deliveryMethodModel.findByPk(id);
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    const deliveryMethod = await this.deliveryMethodModel.update(
      updateDeliveryMethodDto,
      {
        where: { id },
        returning: true,
      }
    );
    return deliveryMethod[1][0];
  }

  remove(id: number) {
    return this.deliveryMethodModel.destroy({ where: { id } });
  }
}
