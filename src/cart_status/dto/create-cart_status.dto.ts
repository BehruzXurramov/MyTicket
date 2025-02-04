import { ApiProperty } from "@nestjs/swagger";

export class CreateCartStatusDto {
  @ApiProperty({ default: "finished" })
  name: string;
}
