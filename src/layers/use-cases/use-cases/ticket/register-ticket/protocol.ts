import { RegisterTicketDTO, RegisterTicketResponseDTO } from "./dtos";

export interface RegisterTicketUseCaseProtocol {
    execute(data: RegisterTicketDTO[], userId: string): Promise<RegisterTicketResponseDTO | void>
}