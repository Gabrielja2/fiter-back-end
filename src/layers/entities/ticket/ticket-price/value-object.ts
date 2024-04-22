import { InvalidTicketPriceError } from "./error";

export class TicketPrice {

    private readonly ticketPrice: number;

    private constructor(ticketPrice: number) {
        this.ticketPrice = ticketPrice;
        Object.freeze(this);
    }

    public get value(): number {
        return this.ticketPrice;
    }

    static create(ticketPrice: number): TicketPrice | InvalidTicketPriceError {
        const isValidParam = this.validate(ticketPrice);
        if (!isValidParam) return new InvalidTicketPriceError(ticketPrice);

        return new TicketPrice(ticketPrice);
    }

    private static validate(ticketPrice: number): boolean {
        if (!ticketPrice) return false;

        if (ticketPrice < 0 || ticketPrice > 25000) return false;

        return true;
    }
}