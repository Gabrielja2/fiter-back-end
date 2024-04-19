import { CreateUserUseCase, LoginUserUseCase, RegisterTicketUseCase } from "@/layers/use-cases"
import { userRepositoryAdapter, criptographyAdapter, authenticationAdapter, ticketRepositoryAdapter } from "@/main/factories/external";


export const createUserUseCase = new CreateUserUseCase(userRepositoryAdapter, criptographyAdapter);
export const loginUserUseCase = new LoginUserUseCase(userRepositoryAdapter, criptographyAdapter, authenticationAdapter);
export const registerTicketUseCase = new RegisterTicketUseCase(ticketRepositoryAdapter);


