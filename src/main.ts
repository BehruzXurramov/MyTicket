import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { CustomValidationPipe } from "./pipe/validation.pipe";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3003;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    // app.useGlobalPipes(new CustomValidationPipe());
    const config = new DocumentBuilder()
      .setTitle("Cats example")
      .setDescription("The cats API description")
      .setVersion("1.0")
      .addTag("cats")
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("swagger", app, documentFactory);

    await app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();

// Tableni modelini classini yaratayotganda nega uni o'zidan extends qilamiz
