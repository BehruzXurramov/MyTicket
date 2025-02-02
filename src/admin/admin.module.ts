import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.models';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "MySecretKey",
      signOptions: { expiresIn: "15h" },
    }),
    SequelizeModule.forFeature([Admin]),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}