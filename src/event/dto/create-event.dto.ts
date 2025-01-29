export class CreateEventDto {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_typeId: number;
  human_categoryId: number;
  venueId: number;
  lang_id: number;
  release_date: string;
}
