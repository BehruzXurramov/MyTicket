import { Injectable } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Region } from "./models/region.models";
import { FileService } from "../file/file.service";

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region) private regionModel: typeof Region,
    private readonly fileService: FileService
  ) {} 
  async create(createRegionDto: CreateRegionDto, image: any) {
    console.log(image);

    const fileName = await this.fileService.saveFile(image);
    return this.regionModel.create({ ...createRegionDto, image: fileName });
  }

  findAll() {
    return this.regionModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.regionModel.findByPk(id);
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.regionModel.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
    return region[1][0];
  }

  remove(id: number) {
    return this.regionModel.destroy({ where: { id } });
  }
}
