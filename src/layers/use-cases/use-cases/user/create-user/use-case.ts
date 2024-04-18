import { CreateUserUseCaseProtocol } from "./protocol";
import { CreateUserDTO, CreateUserResponseDTO } from "./dtos";
import { UserRepositoryProtocol, CryptographyProtocol, InvalidParamError } from "@/layers/use-cases";
import { User } from "@/layers/entities";

export class CreateUserUseCase implements CreateUserUseCaseProtocol {

	constructor(
		private readonly userRepository: UserRepositoryProtocol,
		private readonly cryptographyAdapter: CryptographyProtocol,

	) { }

	async execute({ email, password }: CreateUserDTO): Promise<CreateUserResponseDTO> {
		if (await this.userRepository.findByEmail(email)) return new InvalidParamError("Email já cadastrado");

		const userOrError = User.create(email, password);
		if (userOrError instanceof Error) return userOrError;

		const hashPassword = await this.cryptographyAdapter.hash(userOrError.password.value);

		await this.userRepository.createUser({
			email: userOrError.email.value,
			password: hashPassword,
		});

		return userOrError.email.value;
	}
}