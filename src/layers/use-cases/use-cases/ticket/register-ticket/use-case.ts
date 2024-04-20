import { NotFoundError, RegisterTicketDTO, RegisterTicketResponseDTO, RegisterTicketUseCaseProtocol, TicketRepositoryProtocol, UserRepositoryProtocol } from "@/layers/use-cases";
import { Ticket } from "@/layers/entities";

export class RegisterTicketUseCase implements RegisterTicketUseCaseProtocol {

	constructor(
		private readonly ticketRepository: TicketRepositoryProtocol,
		private readonly userRepository: UserRepositoryProtocol

	) { }

	async execute(tickets: RegisterTicketDTO[], userId: string): Promise<RegisterTicketResponseDTO> {
		let ticketsId = []

		const user = await this.userRepository.findById(userId);
		if (!user) return new NotFoundError('Usuário nao encontrado');

		for (const ticket of tickets) {
			const { ticketId, price, selectedNumbers } = ticket;
			ticketsId.push(ticketId)

			const ticketOrError = Ticket.create(ticketId, price, selectedNumbers);
			if (ticketOrError instanceof Error) return ticketOrError;

			const newTicket = await this.ticketRepository.registerTicket({
				ticketId: ticketOrError.ticketId.value,
				price: ticketOrError.ticketPrice.value,
				selectedNumbers: ticketOrError.ticketSelectedNumbers.value,
			}, userId);

			await this.userRepository.updateUserTickets(user.id, newTicket.id);


		}


		return `Os tickets: ${ticketsId} foram registrados`;
	}
}