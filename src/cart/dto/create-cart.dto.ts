import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
  @ApiProperty({ default: 1 })
  customerId: number;

  @ApiProperty({ default: 1 })
  statusId: number;
}
