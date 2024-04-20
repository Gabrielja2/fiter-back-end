export class InvalidUserBalanceError extends Error {
    constructor(balance: number) {
        super();
        this.name = "InvalidUserBalanceError";
        this.message = `Esse valor (${balance}) é inválido`;
    }
}