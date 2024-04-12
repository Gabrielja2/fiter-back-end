import { CreateUserDTO } from "@/layers/use-cases/use-cases";
import { UserModel } from "./model";

export interface UserRepositoryProtocol {
    createUser(data: CreateUserDTO): Promise<UserModel>;
    findByEmail(email: string): Promise<UserModel | null>;
}