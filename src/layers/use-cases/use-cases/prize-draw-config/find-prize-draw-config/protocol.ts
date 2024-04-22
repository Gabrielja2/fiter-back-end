import { FindPrizeDrawConfigResponseDTO } from "./dtos";

export interface FindPrizeDrawConfigUseCaseProtocol {
    execute(): Promise<FindPrizeDrawConfigResponseDTO | null>
}