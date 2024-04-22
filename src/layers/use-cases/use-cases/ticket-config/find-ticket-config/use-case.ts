import { FindTicketConfigResponseDTO } from "./dtos";
import { FindTicketConfigUseCaseProtocol, NotFoundError, TicketConfigRepositoryProtocol } from "@/layers/use-cases";

export class FindTicketConfigUseCase implements FindTicketConfigUseCaseProtocol {

	constructor(
		private readonly ticketConfigRepository: TicketConfigRepositoryProtocol
	) { }

	async execute(): Promise<FindTicketConfigResponseDTO> {
		const configs = await this.ticketConfigRepository.findTicketsConfig();

		if (!configs) return new NotFoundError('Configurações dos bilhetes não encontradas');

		return configs
	}
}
