export class TicketModel {
    constructor(
        public readonly id: string,
        public ticketId: number,
        public price: number,
        public selectedNumbers: number[],
        public userId: string
    ) { }
}