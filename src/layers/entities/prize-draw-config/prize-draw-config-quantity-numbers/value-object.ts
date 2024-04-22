import { InvalidPrizeDrawConfigQuantityNumbersError } from "./error";

export class PrizeDrawConfigQuantityNumbers {

    private readonly prizeDrawConfigQuantityNumbers: number;

    private constructor(prizeDrawConfigQuantityNumbers: number) {
        this.prizeDrawConfigQuantityNumbers = prizeDrawConfigQuantityNumbers;
        Object.freeze(this);
    }

    public get value(): number {
        return this.prizeDrawConfigQuantityNumbers;
    }

    static create(prizeDrawConfigQuantityNumbers: number): PrizeDrawConfigQuantityNumbers | InvalidPrizeDrawConfigQuantityNumbersError {
        const isValidParam = this.validate(prizeDrawConfigQuantityNumbers);
        if (!isValidParam) return new InvalidPrizeDrawConfigQuantityNumbersError(prizeDrawConfigQuantityNumbers);

        return new PrizeDrawConfigQuantityNumbers(prizeDrawConfigQuantityNumbers);
    }

    private static validate(prizeDrawConfigQuantityNumbers: number): boolean {
        if (!prizeDrawConfigQuantityNumbers) return false;

        const isInvalidQuantityNumbers = prizeDrawConfigQuantityNumbers < 11 || prizeDrawConfigQuantityNumbers > 15
        if (isInvalidQuantityNumbers) return false;

        return true;
    }
}