import { InvalidParamError, NotFoundError, PrizeDrawResultModel } from "@/layers/use-cases";


export type CreatePrizeDrawResultDTO = {
    prizeDrawId: string;
    drawNumbers: number[];
    drawPrize: number;
    winnerTicketId: string | null;
}


export type CreatePrizeDrawResultResponseDTO = string | PrizeDrawResultModel | InvalidParamError | NotFoundError;
