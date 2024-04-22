import { InvalidPrizeDrawConfigAwardError } from "./error";

export class PrizeDrawConfigAward {

    private readonly prizeDrawConfigAward: number;

    private constructor(prizeDrawConfigAward: number) {
        this.prizeDrawConfigAward = prizeDrawConfigAward;
        Object.freeze(this);
    }

    public get value(): number {
        return this.prizeDrawConfigAward;
    }

    static create(prizeDrawConfigAward: number): PrizeDrawConfigAward | InvalidPrizeDrawConfigAwardError {
        const isValidParam = this.validate(prizeDrawConfigAward);
        if (!isValidParam) return new InvalidPrizeDrawConfigAwardError(prizeDrawConfigAward);

        return new PrizeDrawConfigAward(prizeDrawConfigAward);
    }

    private static validate(prizeDrawConfigAward: number): boolean {
        if (!prizeDrawConfigAward) return false;

        const isInvalidAward = prizeDrawConfigAward < 3 || prizeDrawConfigAward > 1500000
        if (isInvalidAward) return false;

        return true;
    }
}