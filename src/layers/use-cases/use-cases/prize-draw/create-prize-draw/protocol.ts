import { CreatePrizeDrawDTO, CreatePrizeDrawResponseDTO } from "./dtos";

export interface CreatePrizeDrawUseCaseProtocol {
    execute(data: CreatePrizeDrawDTO): Promise<CreatePrizeDrawResponseDTO | void>
}