import { CreateUserUseCaseProtocol } from "./protocol";
import { CreateUserDTO, CreateUserResponseDTO } from "./dtos";
import { UserRepositoryProtocol, CryptographyProtocol, InvalidParamError, BalanceRepositoryProtocol } from "@/layers/use-cases";
import { User } from "@/layers/entities";

export class CreateUserUseCase implements CreateUserUseCaseProtocol {

	constructor(
		private readonly userRepository: UserRepositoryProtocol,
		private readonly cryptographyAdapter: CryptographyProtocol,
		private readonly balanceRepository: BalanceRepositoryProtocol

	) { }

	async execute({ email, password }: CreateUserDTO): Promise<CreateUserResponseDTO> {
		const hasEmail = await this.userRepository.findByEmail(email);
		if (hasEmail) return new InvalidParamError("Email já cadastrado");

		const userOrError = User.create(email, password);
		if (userOrError instanceof Error) return userOrError;

		const hashPassword = await this.cryptographyAdapter.hash(userOrError.password.value);

		const newUser = await this.userRepository.createUser({
			email: userOrError.email.value,
			password: hashPassword,
		});

		const balance = await this.balanceRepository.registerBalance({
			userId: newUser.id,
			balance: 50000
		})

		await this.userRepository.updateUserBalance(newUser.id, balance.id);


		return userOrError.email.value;
	}
}