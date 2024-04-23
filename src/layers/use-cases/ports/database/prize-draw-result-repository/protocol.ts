import { CreatePrizeDrawDTO } from "@/layers/use-cases/use-cases";
import { PrizeDrawResultModel } from "./model";

export interface PrizeDrawRepositoryProtocol {
    createPrizeDrawResult(data: CreatePrizeDrawDTO): Promise<PrizeDrawResultModel>;
}