import { FindPrizeDrawConfigResponseDTO } from "./dtos";
import { FindPrizeDrawConfigUseCaseProtocol, NotFoundError, PrizeDrawConfigRepositoryProtocol } from "@/layers/use-cases";

export class FindPrizeDrawConfigUseCase implements FindPrizeDrawConfigUseCaseProtocol {

	constructor(
		private readonly prizeDrawConfigRepository: PrizeDrawConfigRepositoryProtocol
	) { }

	async execute(): Promise<FindPrizeDrawConfigResponseDTO> {
		const configs = await this.prizeDrawConfigRepository.findPrizeDrawsConfig();

		if (!configs) return new NotFoundError('Configurações dos prêmios não encontradas');

		return configs
	}
}
