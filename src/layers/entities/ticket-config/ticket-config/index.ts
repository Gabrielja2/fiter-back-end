import { InvalidTicketConfigCostError } from "../ticket-config-cost/error";
import { TicketConfigCost } from "../ticket-config-cost/value-object";
import { InvalidTicketConfigQuantityNumbersError } from "../ticket-config-quantity-numbers/error";
import { TicketConfigQuantityNumbers } from "../ticket-config-quantity-numbers/value-object";

export class TicketConfig {

    private constructor(
        public ticketConfigCost: TicketConfigCost,
        public ticketConfigQuantityNumbers: TicketConfigQuantityNumbers
    ) {
        this.ticketConfigCost = ticketConfigCost;
        this.ticketConfigQuantityNumbers = ticketConfigQuantityNumbers;
        Object.freeze(this);
    }

    static create(
        ticketConfigCost: number,
        ticketConfigQuantityNumbers: number,
    ): TicketConfig | InvalidTicketConfigCostError | InvalidTicketConfigQuantityNumbersError {

        const ticketConfigCostOrError = TicketConfigCost.create(ticketConfigCost);
        if (ticketConfigCostOrError instanceof Error) return ticketConfigCostOrError;

        const ticketConfigQuantityNumbersOrError = TicketConfigQuantityNumbers.create(ticketConfigQuantityNumbers);
        if (ticketConfigQuantityNumbersOrError instanceof Error) return ticketConfigQuantityNumbersOrError;

        return new TicketConfig(ticketConfigCostOrError, ticketConfigQuantityNumbersOrError);
    }
}