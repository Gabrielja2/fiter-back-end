import { CreateUserUseCase, LoginUserUseCase } from "@/layers/use-cases"
import { userRepositoryAdapter, criptographyAdapter, authenticationAdapter } from "@/main/factories/external";


export const createUserUseCase = new CreateUserUseCase(userRepositoryAdapter, criptographyAdapter);
export const loginUserUseCase = new LoginUserUseCase(userRepositoryAdapter, criptographyAdapter, authenticationAdapter);


