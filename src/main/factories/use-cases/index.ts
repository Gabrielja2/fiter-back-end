import { CreateUserUseCase, LoginUserUseCase, RegisterTicketUseCase } from "@/layers/use-cases"
import { userRepositoryAdapter, criptographyAdapter, authenticationAdapter, ticketRepositoryAdapter, balanceRepositoryAdapter } from "@/main/factories/external";


export const createUserUseCase = new CreateUserUseCase(userRepositoryAdapter, criptographyAdapter, balanceRepositoryAdapter);
export const loginUserUseCase = new LoginUserUseCase(userRepositoryAdapter, criptographyAdapter, authenticationAdapter);
export const registerTicketUseCase = new RegisterTicketUseCase(ticketRepositoryAdapter, userRepositoryAdapter, balanceRepositoryAdapter);


