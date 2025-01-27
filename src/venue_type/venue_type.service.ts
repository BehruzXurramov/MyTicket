import { Injectable } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenueType } from "./models/venue_type.models";

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private venueTypeModel: typeof VenueType
  ) {}

  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeModel.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueTypeModel.findAll();
  }

  findOne(id: number) {
    return this.venueTypeModel.findByPk(id);
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venueType = await this.venueTypeModel.update(updateVenueTypeDto, {
      where: { id },
      returning: true,
    });
    return venueType[1][0];
  }

  remove(id: number) {
    return this.venueTypeModel.destroy({ where: { id } });
  }
}
