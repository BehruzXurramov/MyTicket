import { Injectable } from "@nestjs/common";
import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CartItem } from "./models/cart_item.models";

@Injectable()
export class CartItemService {
  constructor(@InjectModel(CartItem) private cartItemModel: typeof CartItem) {}
  create(createCartItemDto: CreateCartItemDto) {
    return this.cartItemModel.create(createCartItemDto);
  }

  findAll() {
    return this.cartItemModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.cartItemModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto) {
    const cartItem = await this.cartItemModel.update(updateCartItemDto, {
      where: { id },
      returning: true,
    });
    return cartItem[1][0];
  }

  remove(id: number) {
    return this.cartItemModel.destroy({ where: { id } });
  }
}
