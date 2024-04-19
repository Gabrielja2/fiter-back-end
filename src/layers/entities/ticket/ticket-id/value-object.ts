import { InvalidTicketIdError } from "./error";

export class TicketId {

    private readonly ticketId: number;

    private constructor(ticketId: number) {
        this.ticketId = ticketId;
        Object.freeze(this);
    }

    public get value(): number {
        return this.ticketId;
    }

    static create(ticketId: number): TicketId | InvalidTicketIdError {
        if (!this.validate(ticketId)) return new InvalidTicketIdError(ticketId);

        return new TicketId(ticketId);
    }

    private static validate(ticketId: number): boolean {
        if (!ticketId) return false;

        if (ticketId < 0) return false;

        return true;
    }
}