export class TicketModel {
    constructor(
        public readonly id: string,
        public readonly ticketId: number,
        public readonly price: number,
        public readonly selectedNumbers: number[]
    ) { }
}