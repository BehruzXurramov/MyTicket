export class CreateCustomerDto {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  bith_date: string;
  gender: string;
  langId: number;
  hashed_refresh_token: string;
}
