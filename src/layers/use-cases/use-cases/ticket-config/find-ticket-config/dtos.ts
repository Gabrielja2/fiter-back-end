import { NotFoundError, TicketConfigModel } from "@/layers/use-cases";



export type FindTicketConfigResponseDTO = TicketConfigModel[] | NotFoundError;
