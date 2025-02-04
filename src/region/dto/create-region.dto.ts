import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
  @ApiProperty({ default: "Surxondaryo" })
  name: string;
  @ApiProperty({ default: "photo.png" })
  image: string;
}
