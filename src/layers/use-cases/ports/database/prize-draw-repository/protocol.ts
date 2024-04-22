import { RegisterPrizeDrawDTO } from "@/layers/use-cases/use-cases";
import { PrizeDrawModel } from "./model";

export interface PrizeDrawRepositoryProtocol {
    registerPrizeDraw(data: RegisterPrizeDrawDTO): Promise<PrizeDrawModel>;
}