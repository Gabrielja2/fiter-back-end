import { CreatePrizeDrawConfigDTO } from "@/layers/use-cases/use-cases";
import { PrizeDrawConfigModel } from "./model";

export interface PrizeDrawConfigRepositoryProtocol {
    createPrizeDrawConfig(data: CreatePrizeDrawConfigDTO): Promise<PrizeDrawConfigModel>;
    findPrizeDrawsConfig(): Promise<PrizeDrawConfigModel[] | null>;
    findPrizeDrawConfigByQuantityNumbers(quantityNumbers: number): Promise<PrizeDrawConfigModel | null>;
}