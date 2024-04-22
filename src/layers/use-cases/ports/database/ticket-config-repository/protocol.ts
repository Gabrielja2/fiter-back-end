import { CreateTicketConfigDTO } from "@/layers/use-cases/use-cases";
import { TicketConfigModel } from "./model";

export interface TicketConfigRepositoryProtocol {
    createTicketConfig(data: CreateTicketConfigDTO): Promise<TicketConfigModel>;
    findTicketsConfig(): Promise<TicketConfigModel[] | null>;
    findTicketConfigByQuantityNumbers(quantityNumbers: number): Promise<TicketConfigModel | null>;
}