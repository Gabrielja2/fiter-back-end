import { InvalidPrizeDrawnIdError } from "./error";

export class PrizeDrawId {

    private readonly prizeDrawnId: number;

    private constructor(prizeDrawnId: number) {
        this.prizeDrawnId = prizeDrawnId;
        Object.freeze(this);
    }

    public get value(): number {
        return this.prizeDrawnId;
    }

    static create(prizeDrawnId: number): PrizeDrawId | InvalidPrizeDrawnIdError {
        const isValidParam = this.validate(prizeDrawnId);

        if (!isValidParam) return new InvalidPrizeDrawnIdError(prizeDrawnId);

        return new PrizeDrawId(prizeDrawnId);
    }

    private static validate(prizeDrawnId: number): boolean {
        if (!prizeDrawnId) return false;

        if (prizeDrawnId < 0) return false;

        return true;
    }
}