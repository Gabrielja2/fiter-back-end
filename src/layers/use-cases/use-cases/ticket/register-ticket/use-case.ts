import { InvalidParamError, NotFoundError } from "@/layers/use-cases/errors";
import { RegisterTicketDTO, RegisterTicketResponseDTO } from "./dtos";
import { Ticket } from "@/layers/entities";
import { TicketRepositoryProtocol, UserRepositoryProtocol, BalanceRepositoryProtocol } from "@/layers/use-cases/ports";
import { RegisterTicketUseCaseProtocol } from "./protocol";

export class RegisterTicketUseCase implements RegisterTicketUseCaseProtocol {

	constructor(
		private readonly ticketRepository: TicketRepositoryProtocol,
		private readonly userRepository: UserRepositoryProtocol,
		private readonly balanceRepository: BalanceRepositoryProtocol

	) { }

	async execute(tickets: RegisterTicketDTO[], userId: string): Promise<RegisterTicketResponseDTO> {
		const user = await this.userRepository.findById(userId);
		if (!user) return new NotFoundError('Usuário não encontrado');

		let totalPrice = 0;
		for (const ticket of tickets) {
			const { price } = ticket;
			totalPrice += price;
		}

		const userBalance = await this.balanceRepository.findBalanceByUserId(user.id);
		if (!userBalance || userBalance.balance < totalPrice) return new InvalidParamError('Saldo insuficiente');

		for (const ticket of tickets) {
			const { ticketId, price, selectedNumbers } = ticket;

			const ticketOrError = Ticket.create(ticketId, price, selectedNumbers);
			if (ticketOrError instanceof Error) return ticketOrError;

			const newTicket = await this.ticketRepository.registerTicket({
				ticketId: ticketOrError.ticketId.value,
				price: ticketOrError.ticketPrice.value,
				selectedNumbers: ticketOrError.ticketSelectedNumbers.value,
			}, userId);

			userBalance.balance -= price;

			await this.userRepository.updateUserTickets(user.id, newTicket.id);
		}

		await this.balanceRepository.updateBalance(userBalance.id, userBalance.balance);

		return "Tickets foram registrados";
	}
}
