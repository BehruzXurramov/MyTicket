import { ApiProperty } from "@nestjs/swagger";

export class CreateEventTypeDto {
  @ApiProperty({ default: "sport" })
  name: string;
  @ApiProperty({ default: 1 })
  parent_event_typeId: number;
}
