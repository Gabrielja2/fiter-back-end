import { InvalidPrizeDrawnIdError } from "../prize-draw-id/error";
import { PrizeDrawId } from "../prize-draw-id/value-object";
import { InvalidPrizeDrawnNumbersError } from "../prize-drawn-numbers/error";
import { PrizeDrawNumbers } from "../prize-drawn-numbers/value-object";

export class PrizeDraw {

    private constructor(
        public prizeDrawId: PrizeDrawId,
        public prizeDrawNumbers: PrizeDrawNumbers
    ) {
        this.prizeDrawId = prizeDrawId;
        this.prizeDrawNumbers = prizeDrawNumbers;

        Object.freeze(this);
    }

    static create(
        prizeDrawId: number,
        prizeDrawNumbers: number[],

    ): PrizeDraw | InvalidPrizeDrawnIdError | InvalidPrizeDrawnNumbersError {

        const prizeDrawIdOrError = PrizeDrawId.create(prizeDrawId);
        if (prizeDrawIdOrError instanceof Error) return prizeDrawIdOrError;

        const prizeDrawNumbersOrError = PrizeDrawNumbers.create(prizeDrawNumbers);
        if (prizeDrawNumbersOrError instanceof Error) return prizeDrawNumbersOrError;

        return new PrizeDraw(prizeDrawIdOrError, prizeDrawNumbersOrError);
    }
}