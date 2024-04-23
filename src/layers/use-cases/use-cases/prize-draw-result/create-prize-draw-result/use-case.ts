import { NotFoundError, PrizeDrawConfigRepositoryProtocol, PrizeDrawRepositoryProtocol, PrizeDrawResultRepositoryProtocol, TicketRepositoryProtocol } from "@/layers/use-cases";
import { CreatePrizeDrawResultDTO, CreatePrizeDrawResultResponseDTO } from "./dtos";
import { CreatePrizeDrawResultUseCaseProtocol } from "./protocol";

export class CreatePrizeDrawResultUseCase implements CreatePrizeDrawResultUseCaseProtocol {

	constructor(
		private readonly prizeDrawRepository: PrizeDrawRepositoryProtocol,
		private readonly ticketRepository: TicketRepositoryProtocol,
		private readonly prizeDrawResultRepository: PrizeDrawResultRepositoryProtocol,
		private readonly prizeDrawConfigRepository: PrizeDrawConfigRepositoryProtocol,

	) { }

	async execute(data: CreatePrizeDrawResultDTO): Promise<CreatePrizeDrawResultResponseDTO> {

		const currentPrizeDraw = await this.prizeDrawRepository.findCurrentPrizeDraw();
		if (!currentPrizeDraw) return new NotFoundError('Sorteio atual não encontrado');

		let numeros = [];
		let numerosGerados = new Set();

		while (numeros.length < 15) {
			let numeroAleatorio = Math.floor(Math.random() * 25) + 1;
			if (!numerosGerados.has(numeroAleatorio)) {
				numeros.push(numeroAleatorio);
				numerosGerados.add(numeroAleatorio);
			}
		}
		numerosGerados.clear();
		numeros = numeros.sort((a, b) => a - b);


		const ticketsFromPrizeDraw = await this.ticketRepository.findTicketsByPrizeDrawId(currentPrizeDraw.id);
		if (!ticketsFromPrizeDraw) return new NotFoundError('Bilhetes não encontrados para o sorteio atual');

		const winningTickets = [];

		for (const ticket of ticketsFromPrizeDraw) {
			const selectedNumberPerTicket = ticket.selectedNumbers.sort((a, b) => a - b);

			let count = 0;

			for (const number of selectedNumberPerTicket) {
				if (numeros.includes(number)) {
					count++;
				}
			}

			if (count > 10) {
				winningTickets.push(ticket);
			}
		}

		for (const winningTicket of winningTickets) {
			const result = await this.prizeDrawResultRepository.createPrizeDrawResult({
				prizeDrawId: currentPrizeDraw.id,
				drawNumbers: numeros,
				winnerTicketId: winningTicket.id,
				drawPrize: winningTicket.price,
			});


		}

		return "Sorteio realizado com sucesso";
	}
}

