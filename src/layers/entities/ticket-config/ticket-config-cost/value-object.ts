import { InvalidTicketConfigCostError } from "./error";

export class TicketConfigCost {

    private readonly ticketConfigCost: number;

    private constructor(ticketConfigCost: number) {
        this.ticketConfigCost = ticketConfigCost;
        Object.freeze(this);
    }

    public get value(): number {
        return this.ticketConfigCost;
    }

    static create(ticketConfigCost: number): TicketConfigCost | InvalidTicketConfigCostError {
        const isValidParam = this.validate(ticketConfigCost);
        if (!isValidParam) return new InvalidTicketConfigCostError(ticketConfigCost);

        return new TicketConfigCost(ticketConfigCost);
    }

    private static validate(ticketConfigCost: number): boolean {
        if (!ticketConfigCost) return false;

        const isInvalidCost = ticketConfigCost < 3 || ticketConfigCost > 25000
        if (isInvalidCost) return false;

        return true;
    }
}