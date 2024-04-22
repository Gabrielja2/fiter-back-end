export class InvalidPrizeDrawConfigQuantityNumbersError extends Error {
    constructor(quantityNumbers: number) {
        super();
        this.name = "InvalidPrizeDrawConfigQuantityNumbersError";
        this.message = `Essa quantidade de números sorteados (${quantityNumbers}) é inválida`;
    }
}