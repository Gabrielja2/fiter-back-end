import { InvalidParamError } from "@/layers/use-cases";


export type CreateTicketConfigDTO = {
    ticketConfigCost: number;
    ticketConfigQuantityNumbers: number;

}

export type CreateTicketConfigResponseDTO = string | InvalidParamError;
