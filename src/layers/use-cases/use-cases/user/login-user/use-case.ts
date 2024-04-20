import { LoginUserUseCaseProtocol } from "./protocol";
import { LoginUserDTO, LoginUserResponseDTO } from "./dtos";
import { UserRepositoryProtocol, CryptographyProtocol, InvalidParamError, AuthenticationProtocol } from "@/layers/use-cases";
import { JWT_EXPIRE_IN_SECONDS } from "@/shared";



export class LoginUserUseCase implements LoginUserUseCaseProtocol {

	constructor(
		private readonly userRepository: UserRepositoryProtocol,
		private readonly criptography: CryptographyProtocol,
		private readonly authentication: AuthenticationProtocol

	) { }

	async execute({ email, password }: LoginUserDTO): Promise<LoginUserResponseDTO> {

		const user = await this.userRepository.findByEmail(email);
		if (!user) return new InvalidParamError("Senha ou email estão incorretos");

		const isEqual = await this.criptography.compareHash(user.password, password);
		if (!isEqual) return new InvalidParamError("Senha ou email estão incorretos");

		const token = this.authentication.createJsonWebToken({ id: user.id, email: user.email }, JWT_EXPIRE_IN_SECONDS)

		return {
			token,
			user: {
				email: user.email,
				id: user.id,
			}
		};
	}
}
