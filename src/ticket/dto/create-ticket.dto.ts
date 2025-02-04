import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty({ default: 1 })
  eventId: number;

  @ApiProperty({ default: 1 })
  seatId: number;

  @ApiProperty({ default: 100 })
  price: number;

  @ApiProperty({ default: 10 })
  service_fee: number;

  @ApiProperty({ default: 1 })
  statusId: number;

  @ApiProperty({ default: 1 })
  ticket_type: number;
}
