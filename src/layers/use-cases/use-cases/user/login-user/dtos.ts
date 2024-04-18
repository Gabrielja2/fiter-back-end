import { InvalidParamError } from "@/layers/use-cases";


export type LoginUserDTO = {
    email: string;
    password: string;
}


export type LoginUserResponseDTO = {
    token: string
    user: {
        id: string
        email: string
        balance?: number
    }
} | InvalidParamError;
