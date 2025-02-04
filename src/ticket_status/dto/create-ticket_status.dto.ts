import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketStatusDto {
  @ApiProperty({ default: "selled" })
  name: string;
}
