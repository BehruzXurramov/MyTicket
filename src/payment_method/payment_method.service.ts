import { Injectable } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { InjectModel } from "@nestjs/sequelize";
import { PaymentMethod } from "./models/payment_method.models";

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod)
    private paymentMethodModule: typeof PaymentMethod
  ) {}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodModule.create(createPaymentMethodDto);
  }

  findAll() {
    return this.paymentMethodModule.findAll();
  }

  findOne(id: number) {
    return this.paymentMethodModule.findByPk(id);
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const paymentMethod = await this.paymentMethodModule.update(
      updatePaymentMethodDto,
      {
        where: { id },
        returning: true,
      }
    );
    return paymentMethod[1][0];
  }

  remove(id: number) {
    return this.paymentMethodModule.destroy({ where: { id } });
  }
}
