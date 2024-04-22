import { FindTicketConfigResponseDTO } from "./dtos";

export interface FindTicketConfigUseCaseProtocol {
    execute(): Promise<FindTicketConfigResponseDTO | null>
}