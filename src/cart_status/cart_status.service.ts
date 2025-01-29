import { Injectable } from "@nestjs/common";
import { CreateCartStatusDto } from "./dto/create-cart_status.dto";
import { UpdateCartStatusDto } from "./dto/update-cart_status.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CartStatus } from "./models/cart_status.models";

@Injectable()
export class CartStatusService {
  constructor(
    @InjectModel(CartStatus) private cartStatusModel: typeof CartStatus
  ) {}
  create(createCartStatusDto: CreateCartStatusDto) {
    return this.cartStatusModel.create(createCartStatusDto);
  }

  findAll() {
    return this.cartStatusModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} cartStatus`;
  }

  update(id: number, updateCartStatusDto: UpdateCartStatusDto) {
    return `This action updates a #${id} cartStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartStatus`;
  }
}
