import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { LangModule } from "./lang/lang.module";
import { Lang } from "./lang/models/lang.model";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/models/human_category.models";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { SeatType } from "./seat_type/models/seat_type.model";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenueType } from "./venue_type/models/venue_type.models";
import { TicketStatusModule } from "./ticket_status/ticket_status.module";
import { TicketStatus } from "./ticket_status/models/ticket_status.models";
import { PaymentMethodModule } from "./payment_method/payment_method.module";
import { PaymentMethod } from "./payment_method/models/payment_method.models";
import { DeliveryMethodModule } from "./delivery_method/delivery_method.module";
import { DeliveryMethod } from "./delivery_method/models/delivery_method.entity";
import { RegionModule } from "./region/region.module";
import { Region } from "./region/models/region.models";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/models/district.models";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/models/venue.models";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenuePhoto } from "./venue_photo/models/venue_photo.models";
import { VenueVenueTypeModule } from "./venue_venue_type/venue_venue_type.module";
import { VenueVenueType } from "./venue_venue_type/models/venue_venue_type.entity";
import { BookingModule } from "./booking/booking.module";
import { Booking } from "./booking/models/booking.models";
import { CustomerModule } from "./customer/customer.module";
import { Customer } from "./customer/models/customer.models";
import { CartModule } from "./cart/cart.module";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/models/role.models";
import { UsersModule } from "./users/users.module";
import { User } from "./users/models/user.models";
import { UserRole } from "./users/models/user-role.models";
import { AuthModule } from "./auth/auth.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { EventType } from "./event_type/models/event_type.models";
import { EventModule } from "./event/event.module";
import { Event } from "./event/models/event.models";
import { SeatModule } from "./seat/seat.module";
import { Seat } from "./seat/models/seat.models";
import { TicketModule } from "./ticket/ticket.module";
import { Ticket } from "./ticket/models/ticket.models";
import { CartStatusModule } from "./cart_status/cart_status.module";
import { CartStatus } from "./cart_status/models/cart_status.models";
import { Cart } from "./cart/models/cart.models";
import { CartItemModule } from "./cart_item/cart_item.module";
import { CartItem } from "./cart_item/models/cart_item.models";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { FileService } from "./file/file.service";
import { SingleFileService } from "./single-file.service";
import { MultiFileService } from "./multi-file.service";
import { SingleFileController } from "./single-file.controller";
import { MultiFileController } from "./multi-file.controller";
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      port: Number(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Lang,
        HumanCategory,
        SeatType,
        VenueType,
        TicketStatus,
        PaymentMethod,
        DeliveryMethod,
        Region,
        District,
        Venue,
        VenuePhoto,
        VenueVenueType,
        Booking,
        Customer,
        Role,
        User,
        UserRole,
        EventType,
        Event,
        Seat,
        Ticket,
        CartStatus,
        Cart,
        CartItem,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    LangModule,
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
    TicketStatusModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    RegionModule,
    DistrictModule,
    VenueModule,
    VenuePhotoModule,
    VenueVenueTypeModule,
    BookingModule,
    CustomerModule,
    CartModule,
    RolesModule,
    UsersModule,
    AuthModule,
    EventTypeModule,
    EventModule,
    SeatModule,
    TicketModule,
    CartStatusModule,
    CartItemModule,
    FileModule,
    AdminModule,
  ],
  controllers: [SingleFileController, MultiFileController],
  providers: [FileService, SingleFileService, MultiFileService],
})
export class AppModule {}
