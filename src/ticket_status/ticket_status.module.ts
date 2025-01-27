import { Module } from '@nestjs/common';
import { TicketStatusService } from './ticket_status.service';
import { TicketStatusController } from './ticket_status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TicketStatus } from './models/ticket_status.models';

@Module({
  imports: [SequelizeModule.forFeature([TicketStatus])],
  controllers: [TicketStatusController],
  providers: [TicketStatusService],
})
export class TicketStatusModule {}
