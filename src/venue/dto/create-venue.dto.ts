import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateVenueDto {
  @IsString()
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  locatin: string;
  @ApiProperty()
  site: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  schema: string[];
  @ApiProperty()
  regionId: number;
  @ApiPropertyOptional()
  districtId: number;
}
