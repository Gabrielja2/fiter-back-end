export class BalanceModel {
    constructor(
        public readonly id: string,
        public userId: string,
        public balance: number,
    ) { }
}