import { Module } from "@nestjs/common";
import { RegionService } from "./region.service";
import { RegionController } from "./region.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Region } from "./models/region.models";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Region]), FileModule],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
