import { Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenuePhoto } from "./models/venue_photo.models";
import { FileService } from "../file/file.service";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoModel: typeof VenuePhoto,
    private readonly fileService: FileService
  ) {}
  async create(createVenuePhotoDto: CreateVenuePhotoDto, image: any) {   
    const fileName = await this.fileService.saveFile(image);
    return this.venuePhotoModel.create({
      ...createVenuePhotoDto,
      url: fileName,
    });
  }

  findAll() {
    return this.venuePhotoModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.venuePhotoModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const venuePhoto = await this.venuePhotoModel.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
    return venuePhoto[1][0];
  }

  remove(id: number) {
    return this.venuePhotoModel.destroy({ where: { id } });
  }
}
