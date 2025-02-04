import { JwtService } from "@nestjs/jwt";
import { CustomerController } from "../customer.controller";
import { CustomerService } from "../customer.service";
import { Test } from "@nestjs/testing";
import { Customer } from "../models/customer.models";
import { customerStub } from "./stubs/customer.stub";

jest.mock("../customer.service");

describe("CustomerController", () => {
  let customerController: CustomerController;
  let customerService: CustomerService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService, JwtService],
    }).compile();
    customerController = moduleRef.get(CustomerController);
    customerService = moduleRef.get(CustomerService);
    jest.clearAllMocks();
  });
  it("Customer controller should be defined", () => {
    expect(customerController).toBeDefined();
  });

  it("Customer service should be defined", () => {
    expect(customerService).toBeDefined();
  });

  describe("create customer", () => {
    describe("when create customer is called", () => {
      let customer:
        | {
            message: string;
            newCustomer?: undefined;
            access_token?: undefined;
            error?: undefined;
          }
        | {
            message: string;
            newCustomer: Customer;
            access_token: string;
            error?: undefined;
          }
        | {
            error: any;
            message?: undefined;
            newCustomer?: undefined;
            access_token?: undefined;
          };
      beforeAll(async () => {

        customer = await customerController.create(customerStub());
      });

      test("then it should call customerService", () => {
        expect(customerService.create).toHaveBeenCalledWith(customerStub());
      });
      it("then it should return customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });

  describe("Find all customers", () => {
    describe("when findAll customers is called", () => {
      let customers: Customer[] | { error: any };
      beforeAll(async () => {
        customers = await customerController.findAll();
      });
      test("then it should call customersServices findAll method", () => {
        expect(customerService.findAll).toHaveBeenCalled();
      });

      test("then it should return customers", () => {
        expect(customers).toEqual([customerStub()]);
      });
    });
  });

  describe("Find one customer", () => {
    describe("when findOne customer is called", () => {
      let customer: Customer | null | { error: any };
      let id: string;
      beforeAll(async () => {
        id = "1";
        customer = await customerController.findOne(id);
      });

      test("then it should call customersServices findOne method", () => {
        expect(customerService.findOne).toHaveBeenCalledWith(customerStub().id);
      });

      test("then it should return customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });

  describe("remove one customer", () => {
    describe("when remove customer is called", () => {
      let result: Object;
      beforeAll(async () => {
        result = await customerController.remove(String(customerStub().id));
      });

      test("then it should call customersServices remove method", () => {
        expect(customerService.remove).toHaveBeenCalledWith(customerStub().id);
      });

      test("then it should return customer", () => {
        expect(result).toEqual({ message: "Foydalanuvchi o'chirildi" });
      });
    });
  });

  describe("update one customer", () => {
    describe("when update customer is called", () => {
      let customer:
        | { message: string; customer?: undefined; error?: undefined }
        | { message: string; customer: Customer; error?: undefined }
        | { error: any; message?: undefined; customer?: undefined };
      beforeAll(async () => {
        customer = await customerController.update(
          String(customerStub().id),
          customerStub()
        );
      });

      test("then it should call customersServices remove method", () => {
        expect(customerService.update).toHaveBeenCalledWith(
          customerStub().id,
          customerStub()
        );
      });

      test("then it should return customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });
});
