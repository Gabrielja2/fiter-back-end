import {
    CreateTicketConfigUseCase,
    CreateUserUseCase,
    LoginUserUseCase,
    RegisterTicketUseCase,
    FindTicketConfigUseCase,
    CreatePrizeDrawConfigUseCase,
    FindPrizeDrawConfigUseCase,
    RegisterPrizeDrawUseCase,
} from "@/layers/use-cases"
import {
    userRepositoryAdapter,
    criptographyAdapter,
    authenticationAdapter,
    ticketRepositoryAdapter,
    balanceRepositoryAdapter,
    ticketConfigRepositoryAdapter,
    prizeDrawConfigRepositoryAdapter,
    prizeDrawRepositoryAdapter
} from "@/main/factories/external";


export const createUserUseCase = new CreateUserUseCase(userRepositoryAdapter, criptographyAdapter, balanceRepositoryAdapter);
export const loginUserUseCase = new LoginUserUseCase(userRepositoryAdapter, criptographyAdapter, authenticationAdapter);

export const registerTicketUseCase = new RegisterTicketUseCase(ticketRepositoryAdapter, userRepositoryAdapter, balanceRepositoryAdapter);

export const createTicketConfigUseCase = new CreateTicketConfigUseCase(ticketConfigRepositoryAdapter);
export const findTicketConfigUseCase = new FindTicketConfigUseCase(ticketConfigRepositoryAdapter);

export const createPrizeDrawConfigUseCase = new CreatePrizeDrawConfigUseCase(prizeDrawConfigRepositoryAdapter);
export const findPrizeDrawConfigUseCase = new FindPrizeDrawConfigUseCase(prizeDrawConfigRepositoryAdapter);

export const registerPrizeDrawUseCase = new RegisterPrizeDrawUseCase(prizeDrawRepositoryAdapter);


