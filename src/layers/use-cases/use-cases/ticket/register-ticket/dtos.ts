import { InvalidParamError } from "@/layers/use-cases";


export type RegisterTicketDTO = {
    ticketId: number;
    price: number;
    selectedNumbers: number[];
}


export type RegisterTicketResponseDTO = string | InvalidParamError;
