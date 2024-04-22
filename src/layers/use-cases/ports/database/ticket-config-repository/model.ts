export class TicketConfigModel {
    constructor(
        public readonly id: string,
        public cost: number,
        public quantityNumbers: number,
    ) { }
}