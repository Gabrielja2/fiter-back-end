export class InvalidPrizeDrawnNumbersError extends Error {
    constructor(prizeDrawnNumbers: number[]) {
        super();
        this.name = "InvalidPrizeDrawnNumbersError";
        this.message = `Esses números (${prizeDrawnNumbers}) sorteados são inválidos`;
    }
}