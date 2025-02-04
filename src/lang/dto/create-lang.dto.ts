import { ApiProperty } from "@nestjs/swagger";

export class CreateLangDto {
  @ApiProperty({ default: "uzbek" })
  name: string;
}
