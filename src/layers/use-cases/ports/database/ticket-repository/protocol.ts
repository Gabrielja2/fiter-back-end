import { RegisterTicketDTO } from "@/layers/use-cases/use-cases";
import { TicketModel } from "./model";

export interface TicketRepositoryProtocol {
    registerTicket(data: RegisterTicketDTO, userId: string): Promise<TicketModel>;
    updateTicketPrizeDrawId(ticketId: string, prizeDrawId: string): Promise<void>;
}