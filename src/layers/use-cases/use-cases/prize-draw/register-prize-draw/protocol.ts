import { RegisterPrizeDrawDTO, RegisterPrizeDrawResponseDTO } from "./dtos";

export interface RegisterPrizeDrawUseCaseProtocol {
    execute(data: RegisterPrizeDrawDTO): Promise<RegisterPrizeDrawResponseDTO | void>
}