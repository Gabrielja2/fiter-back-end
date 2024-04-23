import { CreatePrizeDrawDTO, CreatePrizeDrawResponseDTO } from "./dtos";

export interface CreatePrizeDrawUseCaseProtocol {
    execute(userId: string): Promise<CreatePrizeDrawResponseDTO | void>
}