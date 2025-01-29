import { Injectable } from "@nestjs/common";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Booking } from "./models/booking.models";

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingModel: typeof Booking) {}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingModel.create(createBookingDto);
  }

  findAll() {
    return this.bookingModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.bookingModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingModel.update(updateBookingDto, {
      where: { id },
      returning: true,
    });
    return booking[1][0];
  }

  remove(id: number) {
    return this.bookingModel.destroy({ where: { id } });
  }
}
