import { CreatePrizeDrawConfigDTO, CreatePrizeDrawConfigResponseDTO } from "./dtos";

export interface CreatePrizeDrawConfigUseCaseProtocol {
    execute(data: CreatePrizeDrawConfigDTO): Promise<CreatePrizeDrawConfigResponseDTO | void>
}