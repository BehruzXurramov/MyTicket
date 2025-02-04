import { ApiProperty } from "@nestjs/swagger";

export class CreateDistrictDto {
  @ApiProperty({ default: "Denov" })
  name: string;
  @ApiProperty({ default: 1 })
  regionId: number;
}
