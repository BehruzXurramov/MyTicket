import { ApiProperty } from "@nestjs/swagger";

export class CreateCartItemDto {
  @ApiProperty({ default: 1 })
  ticketId: number;

  @ApiProperty({ default: 1 })
  cartId: number;

  @ApiProperty({ default: 1 })
  quantity: number;
}
