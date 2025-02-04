import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatDto {
  @ApiProperty({ default: 1 })
  sector: number;

  @ApiProperty({ default: 1 })
  row_number: number;

  @ApiProperty({ default: 1 })
  number: number;

  @ApiProperty({ default: 1 })
  venueId: number;

  @ApiProperty({ default: 1 })
  seat_typeId: number;

  @ApiProperty({ default: "A1" })
  location_in_schema: string;
}
