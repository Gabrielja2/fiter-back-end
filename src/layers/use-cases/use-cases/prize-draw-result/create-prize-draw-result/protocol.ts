import { CreatePrizeDrawResultDTO, CreatePrizeDrawResultResponseDTO } from "./dtos";

export interface CreatePrizeDrawResultUseCaseProtocol {
    execute(data: CreatePrizeDrawResultDTO): Promise<CreatePrizeDrawResultResponseDTO | void>
}