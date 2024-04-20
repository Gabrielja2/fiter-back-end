import { RegisterBalanceDTO } from "@/layers/use-cases/use-cases";
import { BalanceModel } from "./model";

export interface BalanceRepositoryProtocol {
    registerBalance(data: RegisterBalanceDTO): Promise<BalanceModel>;
    findBalanceByUserId(userId: string): Promise<BalanceModel | null>;
}