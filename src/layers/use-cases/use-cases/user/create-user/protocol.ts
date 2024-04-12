import { CreateUserDTO, CreateUserResponseDTO } from "./dtos";

export interface CreateUserUseCaseProtocol {
    execute({ email, password }: CreateUserDTO): Promise<CreateUserResponseDTO | void>
}