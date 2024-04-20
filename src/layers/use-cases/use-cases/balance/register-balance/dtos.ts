import { InvalidParamError } from "@/layers/use-cases";


export type RegisterBalanceDTO = {
    userId: string;
    balance: number;
}


export type RegisterBalanceResponseDTO = string | InvalidParamError;
