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
            ticket?.userId
        );
    }


    async registerTicket(data: RegisterTicketDTO, userId: string): Promise<TicketModel> {
        const ticketCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                ticket_id: data.ticketId,
                price: data.price,
                selected_numbers: data.selectedNumbers,
                user_id: new ObjectId(userId),
                created_at: new Date(),
                updated_at: null,
            })

        const insertedTicket = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: ticketCollection.insertedId });

        return this.toMapperTicketModel(insertedTicket as WithId<Document>);
    }

}