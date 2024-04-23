import { PrizeDrawRepositoryProtocol } from "@/layers/use-cases";
import { CreatePrizeDrawDTO, CreatePrizeDrawResponseDTO } from "./dtos";
import { CreatePrizeDrawUseCaseProtocol } from "./protocol";

export class CreatePrizeDrawUseCase implements CreatePrizeDrawUseCaseProtocol {

	constructor(
		private readonly prizeDrawRepository: PrizeDrawRepositoryProtocol,

	) { }

	async execute(prizeDraw: CreatePrizeDrawDTO): Promise<CreatePrizeDrawResponseDTO> {




		return "Sorteio registrado com sucesso";
	}
}
