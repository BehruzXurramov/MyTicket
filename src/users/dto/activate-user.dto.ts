import { ApiProperty } from "@nestjs/swagger";

export class ActivateUserDto {
  @ApiProperty({ default: 1 })
  userId: number;
}
