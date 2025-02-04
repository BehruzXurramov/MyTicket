import { User } from "../../models/user.models";

export const userStub = () => {
  return {
    id: 1,
    name: "user1",
    email: "user@mail.uz",
    password: "12345678",
    is_active: true,
    value: "admin"
  };
};
