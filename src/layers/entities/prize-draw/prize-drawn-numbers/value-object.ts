import { InvalidPrizeDrawnNumbersError } from "./error";

export class PrizeDrawNumbers {

    private readonly prizeDrawnNumbers: number[];

    private constructor(prizeDrawnNumbers: number[]) {
        this.prizeDrawnNumbers = prizeDrawnNumbers;
        Object.freeze(this);
    }

    public get value(): number[] {
        return this.prizeDrawnNumbers;
    }

    static create(prizeDrawnNumbers: number[]): PrizeDrawNumbers | InvalidPrizeDrawnNumbersError {
        const isValidParam = this.validate(prizeDrawnNumbers);

        if (!isValidParam) return new InvalidPrizeDrawnNumbersError(prizeDrawnNumbers);

        return new PrizeDrawNumbers(prizeDrawnNumbers);
    }

    private static validate(prizeDrawnNumbers: number[]): boolean {
        if (prizeDrawnNumbers.length < 15) return false;

        for (const number of prizeDrawnNumbers) {
            if (number < 1 || number > 25) return false;
        }

        return true;
    }
}