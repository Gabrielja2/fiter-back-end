import { InvalidParamError } from "@/layers/use-cases";


export type CreatePrizeDrawDTO = {
    prizeDrawSequence: number;
    current: boolean;
}


export type CreatePrizeDrawResponseDTO = string | InvalidParamError;
