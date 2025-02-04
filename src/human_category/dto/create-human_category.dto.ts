import { ApiProperty } from "@nestjs/swagger";

export class CreateHumanCategoryDto {
  @ApiProperty({ default: "Adult" })
  name: string;

  @ApiProperty({ default: 18 })
  start_age: number;

  @ApiProperty({ default: 65 })
  finish_age: number;

  @ApiProperty({ default: "Male" })
  gender: string;
}
