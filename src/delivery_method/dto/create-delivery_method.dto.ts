import { ApiProperty } from "@nestjs/swagger";

export class CreateDeliveryMethodDto {
  @ApiProperty({ default: "" })
  name: string;
}
