import { CreateUserDTO } from "@/layers/use-cases/use-cases";
import { UserModel } from "./model";

export interface UserRepositoryProtocol {
    createUser(data: CreateUserDTO): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel | null>;
    findById(userId: string): Promise<UserModel | null>;
    updateUserBalance(userId: string, balanceId: string): Promise<void>;
    updateUserTickets(userId: string, ticket: string): Promise<void>;
}