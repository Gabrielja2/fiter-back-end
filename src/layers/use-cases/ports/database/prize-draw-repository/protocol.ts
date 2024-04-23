import { CreatePrizeDrawDTO } from "@/layers/use-cases/use-cases";
import { PrizeDrawModel } from "./model";

export interface PrizeDrawRepositoryProtocol {
    createPrizeDraw(data: CreatePrizeDrawDTO): Promise<PrizeDrawModel>;
    findCurrentPrizeDraw(): Promise<PrizeDrawModel | null>;
    updatePrizeDrawCurrent(): Promise<void>;
}