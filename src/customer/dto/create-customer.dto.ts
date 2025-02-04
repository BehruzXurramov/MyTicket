import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
  @ApiProperty({ default: "John" })
  first_name: string;

  @ApiProperty({ default: "Doe" })
  last_name: string;

  @ApiProperty({ default: "+1234567890" })
  phone: string;

  @ApiProperty({ default: "john.doe@example.com" })
  email: string;

  @ApiProperty({ default: "2000-01-01" })
  bith_date: string;

  @ApiProperty({ default: "Male" })
  gender: string;

  @ApiProperty({ default: 1 })
  langId: number;

  hashed_password: string;
  hashed_refresh_token: string;
  password: string;
}
