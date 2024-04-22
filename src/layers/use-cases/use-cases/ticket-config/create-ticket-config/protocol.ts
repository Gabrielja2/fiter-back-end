import { CreateTicketConfigDTO, CreateTicketConfigResponseDTO } from "./dtos";

export interface CreateTicketConfigUseCaseProtocol {
    execute(data: CreateTicketConfigDTO): Promise<CreateTicketConfigResponseDTO | void>
}