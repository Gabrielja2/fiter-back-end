import { TicketConfig } from "@/layers/entities";
import { CreateTicketConfigUseCaseProtocol } from "./protocol";
import { CreateTicketConfigDTO, CreateTicketConfigResponseDTO } from "./dtos";
import { TicketConfigRepositoryProtocol } from "@/layers/use-cases";

export class CreateTicketConfigUseCase implements CreateTicketConfigUseCaseProtocol {

	constructor(
		private readonly ticketConfigRepository: TicketConfigRepositoryProtocol
	) { }

	async execute({ ticketConfigCost, ticketConfigQuantityNumbers }: CreateTicketConfigDTO): Promise<CreateTicketConfigResponseDTO> {

		const ticketConfigOrError = TicketConfig.create(
			ticketConfigCost,
			ticketConfigQuantityNumbers
		)
		if (ticketConfigOrError instanceof Error) return ticketConfigOrError


		await this.ticketConfigRepository.createTicketConfig({
			ticketConfigCost: ticketConfigOrError.ticketConfigCost.value,
			ticketConfigQuantityNumbers: ticketConfigOrError.ticketConfigQuantityNumbers.value
		});

		return "Configuração dos bilhetes registrado com sucesso";
	}
}
