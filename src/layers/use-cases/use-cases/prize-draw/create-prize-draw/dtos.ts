import { InvalidParamError, NotFoundError, PrizeDrawModel } from "@/layers/use-cases";


export type CreatePrizeDrawDTO = {
    prizeDrawSequence: number;
    current: boolean;
}


export type CreatePrizeDrawResponseDTO = string | PrizeDrawModel | InvalidParamError | NotFoundError;
