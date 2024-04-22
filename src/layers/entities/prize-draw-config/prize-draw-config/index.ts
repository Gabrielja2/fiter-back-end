import { InvalidPrizeDrawConfigAwardError } from "../prize-draw-config-award/error";
import { PrizeDrawConfigAward } from "../prize-draw-config-award/value-object";
import { InvalidPrizeDrawConfigQuantityNumbersError } from "../prize-draw-config-quantity-numbers/error";
import { PrizeDrawConfigQuantityNumbers } from "../prize-draw-config-quantity-numbers/value-object";

export class PrizeDrawConfig {

    private constructor(
        public prizeDrawConfigAward: PrizeDrawConfigAward,
        public prizeDrawConfigQuantityNumbers: PrizeDrawConfigQuantityNumbers
    ) {
        this.prizeDrawConfigAward = prizeDrawConfigAward;
        this.prizeDrawConfigQuantityNumbers = prizeDrawConfigQuantityNumbers;
        Object.freeze(this);
    }

    static create(
        prizeDrawConfigAward: number,
        prizeDrawConfigQuantityNumbers: number
    ): PrizeDrawConfig | InvalidPrizeDrawConfigAwardError | InvalidPrizeDrawConfigQuantityNumbersError {

        const prizeDrawConfigAwardOrError = PrizeDrawConfigAward.create(prizeDrawConfigAward);
        if (prizeDrawConfigAwardOrError instanceof InvalidPrizeDrawConfigAwardError) return prizeDrawConfigAwardOrError;

        const prizeDrawConfigQuantityNumbersOrError = PrizeDrawConfigQuantityNumbers.create(prizeDrawConfigQuantityNumbers);
        if (prizeDrawConfigQuantityNumbersOrError instanceof InvalidPrizeDrawConfigQuantityNumbersError) return prizeDrawConfigQuantityNumbersOrError;


        return new PrizeDrawConfig(prizeDrawConfigAwardOrError, prizeDrawConfigQuantityNumbersOrError);
    }
}