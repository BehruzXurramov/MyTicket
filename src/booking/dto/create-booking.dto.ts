import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto {
  @ApiProperty({ default: 1 })
  cartId: number;

  @ApiProperty({ default: 2 })
  payment_methodId: number;

  @ApiProperty({ default: 3 })
  delivery_methodId: number;

  @ApiProperty({ default: 4 })
  discount_couponId: number;

  @ApiProperty({ default: 5 })
  statusId: number;
}
