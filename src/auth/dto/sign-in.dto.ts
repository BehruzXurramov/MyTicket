import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
  @ApiProperty({ default: "bxurramov597@gmail.com" })
  readonly email: string;

  @ApiProperty({ default: "12345678" })
  readonly password: string;

  @ApiProperty({ default: "some_value" })
  readonly value: string;
}
