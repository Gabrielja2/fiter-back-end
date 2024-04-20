import { RegisterBalanceDTO, RegisterBalanceResponseDTO } from "./dtos";

export interface RegisterBalanceUseCaseProtocol {
    execute(data: RegisterBalanceDTO[]): Promise<RegisterBalanceResponseDTO | void>
}