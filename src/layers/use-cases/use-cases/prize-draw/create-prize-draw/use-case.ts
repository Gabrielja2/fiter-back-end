import { BalanceRepositoryProtocol, NotFoundError, PrizeDrawConfigRepositoryProtocol, PrizeDrawRepositoryProtocol, PrizeDrawResultRepositoryProtocol, TicketRepositoryProtocol } from "@/layers/use-cases";
import { CreatePrizeDrawResponseDTO } from "./dtos";
import { CreatePrizeDrawUseCaseProtocol } from "./protocol";

export class CreatePrizeDrawUseCase implements CreatePrizeDrawUseCaseProtocol {

	constructor(
		private readonly prizeDrawRepository: PrizeDrawRepositoryProtocol,
		private readonly ticketRepository: TicketRepositoryProtocol,
		private readonly prizeDrawResultRepository: PrizeDrawResultRepositoryProtocol,
		private readonly prizeDrawConfigRepository: PrizeDrawConfigRepositoryProtocol,
		private readonly balanceRepository: BalanceRepositoryProtocol

	) { }

	async execute(userId: string): Promise<CreatePrizeDrawResponseDTO> {

		const currentPrizeDraw = await this.prizeDrawRepository.findCurrentPrizeDraw();
		if (!currentPrizeDraw) return new NotFoundError('Sorteio atual não encontrado');

		const ticketsFromPrizeDraw = await this.ticketRepository.findTicketsByPrizeDrawId(currentPrizeDraw.id);
		if (!ticketsFromPrizeDraw) return new NotFoundError('Bilhetes não encontrados para o sorteio atual');

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

		let winningTickets = [];

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
			const selectedNumberPerTicket = winningTicket.selectedNumbers.sort((a, b) => a - b);

			let count = 0;

			for (const number of selectedNumberPerTicket) {
				if (numeros.includes(number)) {
					count++;
				}
			}

			if (count > 10) {
				const drawPrize = await this.prizeDrawConfigRepository.findPrizeDrawConfigByQuantityNumbers(count);
				if (!drawPrize) return new NotFoundError('Configuração de sorteio não encontrada');

				const result = await this.prizeDrawResultRepository.createPrizeDrawResult({
					prizeDrawId: currentPrizeDraw.id,
					drawNumbers: numeros,
					winnerTicketId: winningTicket.id,
					drawPrize: drawPrize.award,
				});

				const winners = await this.prizeDrawResultRepository.findWinnersByWinnerTicketId(winningTicket.id);

				if (!winners) return new NotFoundError('Vencedores não encontrados');


				for (const winner of winners) {
					const award = winner.drawPrize;
					console.log('award', award);

					const winnerTicket = await this.ticketRepository.findTicketsById(winner.winnerTicketId);
					console.log('winnerTicket', winnerTicket?.userId);
					if (!winnerTicket) return new NotFoundError('Bilhetes não encontrados');

					const userWinnerBalance = await this.balanceRepository.findBalanceByUserId(winnerTicket.userId);
					console.log('userWinnerBalance', userWinnerBalance);

					if (!userWinnerBalance) return new NotFoundError('Saldo do vencedor não encontrado');


					const newBalance = userWinnerBalance.balance + award;
					await this.balanceRepository.updateBalance(userWinnerBalance.id, newBalance);


				}


			}
		}

		await this.prizeDrawRepository.updatePrizeDrawCurrent();
		await this.prizeDrawRepository.createPrizeDraw({
			prizeDrawSequence: currentPrizeDraw.prizeDrawSequence + 1,
			current: true,

		})

		return "Sorteio realizado com sucesso";
	}
}

