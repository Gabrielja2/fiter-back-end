import { InvalidParamError } from "@/layers/use-cases";


export type LoginUserDTO = {
    email: string;
    password: string;
}


export type LoginUserResponseDTO = string | InvalidParamError;
