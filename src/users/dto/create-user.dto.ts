import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ default: "John Doe" })
  name: string;

  @ApiProperty({ default: "john.doe@example.com" })
  email: string;

  @ApiProperty({ default: "strongPassword123" })
  password: string;

  @ApiProperty({ default: "additional_value" })
  value: string;
}
