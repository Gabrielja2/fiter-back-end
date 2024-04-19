export class InvalidTicketPriceError extends Error {
    constructor(price: number) {
        super();
        this.name = "InvalidTicketPriceError";
        this.message = `Esse preço (${price}) é inválido`;
    }
}