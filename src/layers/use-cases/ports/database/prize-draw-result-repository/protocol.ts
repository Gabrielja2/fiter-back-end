import { CreatePrizeDrawResultDTO } from "@/layers/use-cases";
import { PrizeDrawResultModel } from "./model";

export interface PrizeDrawResultRepositoryProtocol {
    createPrizeDrawResult(data: CreatePrizeDrawResultDTO): Promise<PrizeDrawResultModel>;
    findWinnersByWinnerTicketId(winnerTicketId: string): Promise<PrizeDrawResultModel[] | null>;
}