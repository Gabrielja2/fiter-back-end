export class InvalidTicketSelectedNumbersError extends Error {
    constructor(selectedNumbers: number[]) {
        super();
        this.name = "InvalidTicketSelectedNumbersError";
        this.message = `Esses números (${selectedNumbers}) estão inválidos`;
    }
}