import { RegisterTicketDTO, RegisterTicketResponseDTO } from "./dtos";

export interface RegisterTicketUseCaseProtocol {
    execute(data: RegisterTicketDTO[]): Promise<RegisterTicketResponseDTO | void>
}