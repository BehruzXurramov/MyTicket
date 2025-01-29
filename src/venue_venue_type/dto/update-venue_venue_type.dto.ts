import { PartialType } from '@nestjs/swagger';
import { CreateVenueVenueTypeDto } from './create-venue_venue_type.dto';

export class UpdateVenueVenueTypeDto extends PartialType(CreateVenueVenueTypeDto) {}
