import { Injectable } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Cart } from "./models/cart.models";

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart) {}
  create(createCartDto: CreateCartDto) {
    return this.cartModel.create(createCartDto);
  }

  findAll() {
    return this.cartModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.cartModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartModel.update(updateCartDto, {
      where: { id },
      returning: true,
    });
    return cart[1][0];
  }

  remove(id: number) {
    return this.cartModel.destroy({ where: { id } });
  }
}
