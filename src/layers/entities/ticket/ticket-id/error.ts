export class InvalidTicketIdError extends Error {
    constructor(id: number) {
        super();
        this.name = "InvalidTicketIdError";
        this.message = `Esse id (${id}) é inválido`;
    }
}