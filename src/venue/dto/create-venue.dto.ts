import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateVenueDto {
  @ApiProperty({ default: "Sample Venue" })
  name: string;

  @ApiProperty({ default: "123 Venue Street, City" })
  address: string;

  @ApiProperty({ default: "Venue Location" })
  locatin: string;

  @ApiProperty({ default: "https://venue-site.com" })
  site: string;

  @ApiProperty({ default: "+1234567890" })
  phone: string;

  @ApiProperty({ default: ["A1", "B2", "C3"] })
  schema: string[];

  @ApiProperty({ default: 1 })
  regionId: number;

  @ApiPropertyOptional({ default: 1 })
  districtId: number;
}
