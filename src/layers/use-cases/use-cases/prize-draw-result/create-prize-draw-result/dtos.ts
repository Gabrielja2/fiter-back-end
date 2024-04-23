import { InvalidParamError, NotFoundError, PrizeDrawResultModel } from "@/layers/use-cases";


export type CreatePrizeDrawResultDTO = {
    prizeDrawId: string;
    drawNumbers: number[];
    winnerTicketId: string;
    drawPrize: number;
}


export type CreatePrizeDrawResultResponseDTO = string | PrizeDrawResultModel | InvalidParamError | NotFoundError;
