import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ default: "admin" })
  value: string;
  @ApiProperty({ default: "Adminlar uchun role" })
  description: string;
}
