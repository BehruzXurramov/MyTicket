import { ApiProperty } from "@nestjs/swagger";

export class CreateVenuePhotoDto {
  @ApiProperty({ default: "photo.png" })
  url: string;
  @ApiProperty({ default: 1 })
  venueId: number;
}
