import { InvalidUserBalanceError } from "../user-balance/error";
import { UserBalance } from "../user-balance/value-object";

export class Balance {

    private constructor(
        public balance: UserBalance,

    ) {
        this.balance = balance;
        Object.freeze(this);
    }

    static create(
        balance: number,

    ): Balance | InvalidUserBalanceError {
        const balanceOrError = UserBalance.create(balance);
        if (balanceOrError instanceof Error) return balanceOrError;


        return new Balance(balanceOrError);
    }
}