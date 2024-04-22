export class InvalidTicketConfigQuantityNumbersError extends Error {
    constructor(quantityNumbers: number) {
        super();
        this.name = "InvalidTicketConfigQuantityNumbersError";
        this.message = `Essa quantidade de números selecionados (${quantityNumbers}) é inválida`;
    }
}