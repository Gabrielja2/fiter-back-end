import {
    CreateTicketConfigUseCase,
    CreateUserUseCase,
    LoginUserUseCase,
    RegisterTicketUseCase,
    FindTicketConfigUseCase,
} from "@/layers/use-cases"
import {
    userRepositoryAdapter,
    criptographyAdapter,
    authenticationAdapter,
    ticketRepositoryAdapter,
    balanceRepositoryAdapter,
    ticketConfigRepositoryAdapter,
} from "@/main/factories/external";


export const createUserUseCase = new CreateUserUseCase(userRepositoryAdapter, criptographyAdapter, balanceRepositoryAdapter);
export const loginUserUseCase = new LoginUserUseCase(userRepositoryAdapter, criptographyAdapter, authenticationAdapter);
export const registerTicketUseCase = new RegisterTicketUseCase(ticketRepositoryAdapter, userRepositoryAdapter, balanceRepositoryAdapter);
export const createTicketConfigUseCase = new CreateTicketConfigUseCase(ticketConfigRepositoryAdapter);
export const findTicketConfigUseCase = new FindTicketConfigUseCase(ticketConfigRepositoryAdapter);


