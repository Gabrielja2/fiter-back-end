import { PrizeDrawConfig } from "@/layers/entities";
import { CreatePrizeDrawConfigUseCaseProtocol } from "./protocol";
import { CreatePrizeDrawConfigDTO, CreatePrizeDrawConfigResponseDTO } from "./dtos";
import { PrizeDrawConfigRepositoryProtocol } from "@/layers/use-cases";

export class CreatePrizeDrawConfigUseCase implements CreatePrizeDrawConfigUseCaseProtocol {

	constructor(
		private readonly prizeDrawConfigRepository: PrizeDrawConfigRepositoryProtocol
	) { }

	async execute({ prizeDrawConfigAward, prizeDrawConfigQuantityNumbers }: CreatePrizeDrawConfigDTO): Promise<CreatePrizeDrawConfigResponseDTO> {

		const prizeDrawConfigOrError = PrizeDrawConfig.create(prizeDrawConfigAward, prizeDrawConfigQuantityNumbers);
		if (prizeDrawConfigOrError instanceof Error) return prizeDrawConfigOrError

		await this.prizeDrawConfigRepository.createPrizeDrawConfig({
			prizeDrawConfigAward: prizeDrawConfigOrError.prizeDrawConfigAward.value,
			prizeDrawConfigQuantityNumbers: prizeDrawConfigOrError.prizeDrawConfigQuantityNumbers.value
		})

		return "Configuração do prêmio registrado com sucesso";
	}
}
