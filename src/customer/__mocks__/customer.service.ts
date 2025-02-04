import { customerStub } from "../test/stubs/customer.stub";

export const CustomerService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(customerStub()),
  findAll: jest.fn().mockResolvedValue([customerStub()]),
  findOne: jest.fn().mockResolvedValue(customerStub()),
  update: jest.fn().mockResolvedValue(customerStub()),
  remove: jest.fn().mockReturnValue({ message: "Foydalanuvchi o'chirildi" }),
});
