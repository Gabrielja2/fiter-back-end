import { InvalidUserBalanceError } from "./error";

export class UserBalance {

    private readonly userBalance: number;

    private constructor(userBalance: number) {
        this.userBalance = userBalance;
        Object.freeze(this);
    }

    public get value(): number {
        return this.userBalance;
    }

    static create(userBalance: number): UserBalance | InvalidUserBalanceError {
        if (!this.validate(userBalance)) return new InvalidUserBalanceError(userBalance);

        return new UserBalance(userBalance);
    }

    private static validate(userBalance: number): boolean {
        if (!userBalance) return false;

        if (userBalance < 0) return false;

        return true;
    }
}