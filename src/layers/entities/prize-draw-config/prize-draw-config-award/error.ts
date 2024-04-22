export class InvalidPrizeDrawConfigAwardError extends Error {
    constructor(award: number) {
        super();
        this.name = "InvalidPrizeDrawConfigAwardError";
        this.message = `Esse valor (${award}) de prêmio é inválido`;
    }
}