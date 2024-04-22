export class InvalidTicketIdError extends Error {
    constructor(ticketId: number) {
        super();
        this.name = "InvalidTicketIdError";
        this.message = `Esse id (${ticketId}) é inválido`;
    }
}