import {
    UserRepositoryAdapter,
    CriptographyAdapter,
    AuthenticationAdapter,
    TicketRepositoryAdapter,
    BalanceRepositoryAdapter,
    TicketConfigRepositoryAdapter,
    PrizeDrawConfigRepositoryAdapter,
    PrizeDrawRepositoryAdapter,
} from "@/layers/external";


export const userRepositoryAdapter = new UserRepositoryAdapter();
export const criptographyAdapter = new CriptographyAdapter();
export const authenticationAdapter = new AuthenticationAdapter();

export const balanceRepositoryAdapter = new BalanceRepositoryAdapter();

export const ticketRepositoryAdapter = new TicketRepositoryAdapter();
export const ticketConfigRepositoryAdapter = new TicketConfigRepositoryAdapter();

export const prizeDrawConfigRepositoryAdapter = new PrizeDrawConfigRepositoryAdapter();
export const prizeDrawRepositoryAdapter = new PrizeDrawRepositoryAdapter();



