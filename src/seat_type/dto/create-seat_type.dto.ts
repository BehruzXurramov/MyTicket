import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto {
  @ApiProperty({ default: "balkon" })
  name: string;
}
