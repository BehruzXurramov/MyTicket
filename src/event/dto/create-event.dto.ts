import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
  @ApiProperty({ default: "Sample Event" })
  name: string;

  @ApiProperty({ default: "path/to/photo.jpg" })
  photo: string;

  @ApiProperty({ default: "2025-01-01" })
  start_date: string;

  @ApiProperty({ default: "10:00 AM" })
  start_time: string;

  @ApiProperty({ default: "2025-01-02" })
  finish_date: string;

  @ApiProperty({ default: "5:00 PM" })
  finish_time: string;

  @ApiProperty({ default: "Event Information" })
  info: string;

  @ApiProperty({ default: 1 })
  event_typeId: number;

  @ApiProperty({ default: 1 })
  human_categoryId: number;

  @ApiProperty({ default: 1 })
  venueId: number;

  @ApiProperty({ default: 1 })
  lang_id: number;

  @ApiProperty({ default: "2024-12-01" })
  release_date: string;
}
