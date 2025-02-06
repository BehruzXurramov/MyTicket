import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("Customer (e2e)", () => {
  let app: INestApplication;
  let token: string;
  let customerDto = {
    first_name: "Behruz",
    last_name: "Xurramov",
    password: "1234567890",
    email: "bxurramov597@gamil.com",
    birth_day: "2005-09-30",
    phone: "+998919053115",
    gender: "male",
    langId: 1,
  };
  jest.setTimeout(25000);
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    const response = await request(app.getHttpServer())
      .post("/customer/login")
      .send({
        email: "bxurramov597@gamil.com",
        password: "1234567890",
      });

    token = response.body.accessToken;
  });

  it("/customer/:id(GET)-->200 OK", () => {
    return request(app.getHttpServer())
      .get("/customer/6")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-type", /json/)
      .expect(200);
  });

  it("/customer/:id(GET)-->401 UNAUTHORIZED", () => {
    return request(app.getHttpServer())
      .get("/customer/6")
      .expect("Content-type", /json/)
      .expect(401);
  });

  it("customer/(POST)-->201 CREATED", () => {
    return request(app.getHttpServer())
      .post("/customer")
      .send(customerDto)
      .expect("Content-type", /json/)
      .expect(201);
  });

  it("customer/(POST)-->400 BAD REQUEST", () => {
    return request(app.getHttpServer())
      .post("/customer")
      .send({})
      .expect("Content-type", /json/)
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
