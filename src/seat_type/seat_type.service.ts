import { Injectable } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { SeatType } from "./models/seat_type.model";

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeModel: typeof SeatType) {}

  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeModel.create(createSeatTypeDto);
  }

  findAll() {
    return this.seatTypeModel.findAll();
  }

  findOne(id: number) {
    return this.seatTypeModel.findByPk(id);
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const seatType = await this.seatTypeModel.update(updateSeatTypeDto, {
      where: { id },
      returning: true,
    });
    return seatType[1][0];
  }

  remove(id: number) {
    return this.seatTypeModel.destroy({ where: { id } });
  }
}
