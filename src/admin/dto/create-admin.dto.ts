import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({ default: "Behruz" })
  name: string;

  @ApiProperty({ default: "bxurramov597@gmail.com" })
  email: string;

  @ApiProperty({ default: "12345678" })
  password: string;

  @ApiProperty({ default: true })
  is_creator: boolean;

  is_active: boolean;
  hashed_password: string;
  hashed_refresh_token: string;
}
