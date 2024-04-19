import { InvalidTicketIdError } from "../ticket-id/error";
import { TicketId } from "../ticket-id/value-object";
import { InvalidTicketPriceError } from "../ticket-price/error";
import { TicketPrice } from "../ticket-price/value-object";
import { InvalidTicketSelectedNumbersError } from "../ticket-selected-numbers/error";
import { TicketSelectedNumbers } from "../ticket-selected-numbers/value-object";

export class Ticket {

    private constructor(
        public ticketId: TicketId,
        public ticketPrice: TicketPrice,
        public ticketSelectedNumbers: TicketSelectedNumbers
    ) {
        this.ticketId = ticketId;
        this.ticketPrice = ticketPrice;
        this.ticketSelectedNumbers = ticketSelectedNumbers;

        Object.freeze(this);
    }

    static create(
        ticketId: number,
        ticketPrice: number,
        ticketSelectedNumbers: number[]
    ): Ticket | InvalidTicketIdError | InvalidTicketPriceError | InvalidTicketSelectedNumbersError {

        const ticketIdOrError = TicketId.create(ticketId);
        if (ticketIdOrError instanceof Error) return ticketIdOrError;

        const ticketPriceOrError = TicketPrice.create(ticketPrice);
        if (ticketPriceOrError instanceof Error) return ticketPriceOrError;

        const ticketSelectedNumbersOrError = TicketSelectedNumbers.create(ticketSelectedNumbers);
        if (ticketSelectedNumbersOrError instanceof Error) return ticketSelectedNumbersOrError;

        return new Ticket(ticketIdOrError, ticketPriceOrError, ticketSelectedNumbersOrError);
    }
}