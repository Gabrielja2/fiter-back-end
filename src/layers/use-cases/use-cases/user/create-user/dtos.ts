import { InvalidParamError } from "@/layers/use-cases";


export type CreateUserDTO = {
    email: string;
    password: string;
}


export type CreateUserResponseDTO = string | InvalidParamError;
