import { Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./models/venue.models";

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueModel: typeof Venue) {}
  create(createVenueDto: CreateVenueDto) {
    return this.venueModel.create(createVenueDto);
  }

  findAll() {
    return this.venueModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.venueModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const venue = await this.venueModel.update(updateVenueDto, {
      where: { id },
      returning: true,
    });
    return venue[1][0];
  }

  remove(id: number) {
    return this.venueModel.destroy({ where: { id } });
  }
}

