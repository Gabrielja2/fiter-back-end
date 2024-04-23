import { DatabaseNoSQLHelper } from "../helpers";
import { RegisterTicketDTO, TicketModel, TicketRepositoryProtocol } from "@/layers/use-cases";
import { WithId, Document, ObjectId } from "mongodb";

export class TicketRepositoryAdapter implements TicketRepositoryProtocol {
    private readonly collection: string = "tickets";

    private toMapperTicketModel(ticket: WithId<Document>) {
        return new TicketModel(
            ticket?._id.toString(),
            ticket?.ticketId,
            ticket?.price,
            ticket?.selectedNumbers,
            ticket?.userId,
            ticket?.prizeDrawId
        );
    }


    async registerTicket(data: RegisterTicketDTO, userId: string): Promise<TicketModel> {
        const ticketCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                ticket_id: data.ticketId,
                price: data.price,
                selected_numbers: data.selectedNumbers,
                user_id: new ObjectId(userId),
                prize_draw_id: null,
                created_at: new Date(),
                updated_at: null,
            })

        const insertedTicket = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: ticketCollection.insertedId });

        return this.toMapperTicketModel(insertedTicket as WithId<Document>);
    }

    async updateTicketPrizeDrawId(ticketId: string, prizeDrawId: string): Promise<void> {

        const filter = { _id: new ObjectId(ticketId) };
        const update = {
            $set: {
                prize_draw_id: new ObjectId(prizeDrawId),
                updated_at: new Date()
            },
        } as Document;

        await DatabaseNoSQLHelper.getCollection(this.collection)
            .updateOne(filter, update);
    }
}

