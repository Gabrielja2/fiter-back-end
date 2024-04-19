import {
    CreateUserDTO,
    CreateUserResponseDTO,
    CreateUserUseCaseProtocol,
    UserModel,

} from "@/layers/use-cases";

export class CreateUserStub implements CreateUserUseCaseProtocol {
    async execute({ email, password }: CreateUserDTO): Promise<CreateUserResponseDTO> {

        const userModel = new UserModel("any_id", email, password, 50000);

        return email
    }
}



