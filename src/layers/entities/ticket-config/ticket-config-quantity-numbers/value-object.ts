import { InvalidTicketConfigQuantityNumbersError } from "./error";

export class TicketConfigQuantityNumbers {

    private readonly ticketConfigQuantityNumbers: number;

    private constructor(ticketConfigQuantityNumbers: number) {
        this.ticketConfigQuantityNumbers = ticketConfigQuantityNumbers;
        Object.freeze(this);
    }

    public get value(): number {
        return this.ticketConfigQuantityNumbers;
    }

    static create(ticketConfigQuantityNumbers: number): TicketConfigQuantityNumbers | InvalidTicketConfigQuantityNumbersError {
        const isValidParam = this.validate(ticketConfigQuantityNumbers);
        if (!isValidParam) return new InvalidTicketConfigQuantityNumbersError(ticketConfigQuantityNumbers);

        return new TicketConfigQuantityNumbers(ticketConfigQuantityNumbers);
    }

    private static validate(ticketConfigQuantityNumbers: number): boolean {
        if (!ticketConfigQuantityNumbers) return false;

        const isInvalidQuantityNumbers = ticketConfigQuantityNumbers < 15 || ticketConfigQuantityNumbers > 20
        if (isInvalidQuantityNumbers) return false;

        return true;
    }
}