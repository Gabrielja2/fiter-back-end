import { RegisterTicketDTO, RegisterTicketResponseDTO, RegisterTicketUseCaseProtocol, TicketRepositoryProtocol } from "@/layers/use-cases";
import { Ticket } from "@/layers/entities";

export class RegisterTicketUseCase implements RegisterTicketUseCaseProtocol {

	constructor(
		private readonly ticketRepository: TicketRepositoryProtocol,

	) { }

	async execute(data: RegisterTicketDTO[]): Promise<RegisterTicketResponseDTO> {
		for (const ticket of data) {
			const { ticketId, price, selectedNumbers } = ticket;

			const ticketOrError = Ticket.create(ticketId, price, selectedNumbers);
			if (ticketOrError instanceof Error) return ticketOrError;

			await this.ticketRepository.registerTicket({
				ticketId: ticketOrError.ticketId.value,
				price: ticketOrError.ticketPrice.value,
				selectedNumbers: ticketOrError.ticketSelectedNumbers.value
			});
		}


		return data[0].ticketId
	}
}