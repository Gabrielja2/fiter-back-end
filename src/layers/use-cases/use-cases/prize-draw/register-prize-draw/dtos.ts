import { InvalidParamError } from "@/layers/use-cases";


export type RegisterPrizeDrawDTO = {
    prizeDrawAward: number;
    prizeDrawNumbers: number[];
}


export type RegisterPrizeDrawResponseDTO = string | InvalidParamError;
