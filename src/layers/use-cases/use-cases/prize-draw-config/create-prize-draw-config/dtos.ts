import { InvalidParamError } from "@/layers/use-cases";


export type CreatePrizeDrawConfigDTO = {
    prizeDrawConfigAward: number;
    prizeDrawConfigQuantityNumbers: number;

}

export type CreatePrizeDrawConfigResponseDTO = string | InvalidParamError;
