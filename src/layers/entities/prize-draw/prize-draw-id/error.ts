export class InvalidPrizeDrawnIdError extends Error {
    constructor(prizeDrawnId: number) {
        super();
        this.name = "InvalidPrizeDrawnNumbersError";
        this.message = `Esse id de sorteio (${prizeDrawnId}) é inválido`;
    }
}