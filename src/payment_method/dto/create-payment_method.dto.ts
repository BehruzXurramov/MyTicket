import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentMethodDto {
  @ApiProperty({ default: "" })
  name: string;
}
