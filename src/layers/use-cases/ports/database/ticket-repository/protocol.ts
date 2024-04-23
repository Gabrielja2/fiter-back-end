import { RegisterTicketDTO } from "@/layers/use-cases/use-cases";
import { TicketModel } from "./model";

export interface TicketRepositoryProtocol {
    registerTicket(data: RegisterTicketDTO, userId: string): Promise<TicketModel>;
    updateTicketPrizeDrawId(ticketId: string, prizeDrawId: string): Promise<void>;
    findTicketsByPrizeDrawId(prizeDrawId: string): Promise<TicketModel[] | null>;
    findTicketsById(ticketId: string): Promise<TicketModel | null>;
}