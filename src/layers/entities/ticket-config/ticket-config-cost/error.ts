export class InvalidTicketConfigCostError extends Error {
    constructor(cost: number) {
        super();
        this.name = "InvalidTicketConfigCostError";
        this.message = `Esse valor de bilhete (${cost}) é inválido`;
    }
}