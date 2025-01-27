import { Injectable } from "@nestjs/common";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TicketStatus } from "./models/ticket_status.models";

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel(TicketStatus) private ticketStatusModel: typeof TicketStatus
  ) {}

  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusModel.create(createTicketStatusDto);
  }

  findAll() {
    return this.ticketStatusModel.findAll();
  }

  findOne(id: number) {
    return this.ticketStatusModel.findByPk(id);
  }

  async update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    const ticketStatus = await this.ticketStatusModel.update(
      updateTicketStatusDto,
      {
        where: { id },
        returning: true,
      }
    );
    return ticketStatus[1][0];
  }

  remove(id: number) {
    return this.ticketStatusModel.destroy({ where: { id } });
  }
}
