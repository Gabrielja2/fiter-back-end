import { PrizeDrawRepositoryProtocol } from "@/layers/use-cases";
import { RegisterPrizeDrawDTO, RegisterPrizeDrawResponseDTO } from "./dtos";
import { RegisterPrizeDrawUseCaseProtocol } from "./protocol";

export class RegisterPrizeDrawUseCase implements RegisterPrizeDrawUseCaseProtocol {

	constructor(
		private readonly prizeDrawRepository: PrizeDrawRepositoryProtocol,

	) { }

	async execute(prizeDraw: RegisterPrizeDrawDTO): Promise<RegisterPrizeDrawResponseDTO> {




		return "Sorteio registrado com sucesso";
	}
}
