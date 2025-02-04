import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueVenueTypeDto {
  @ApiProperty({ default: 1 })
  venueId: number;
  @ApiProperty({ default: 1 })
  venueTypeId: number;
}
