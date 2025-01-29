import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./models/customer.models";

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerModul: typeof Customer) {}
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerModul.create(createCustomerDto);
  }

  findAll() {
    return this.customerModul.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.customerModul.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerModul.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
    return customer[1][0];
  }

  remove(id: number) {
    return this.customerModul.destroy({ where: { id } });
  }
}
