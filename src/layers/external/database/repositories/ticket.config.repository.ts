import { DatabaseNoSQLHelper } from "../helpers";
import { CreateTicketConfigDTO, TicketConfigModel, TicketConfigRepositoryProtocol } from "@/layers/use-cases";
import { WithId, Document } from "mongodb";

export class TicketConfigRepositoryAdapter implements TicketConfigRepositoryProtocol {
    private readonly collection: string = "ticket-configs";

    private toMapperTicketConfigModel(ticketConfig: WithId<Document>) {
        return new TicketConfigModel(
            ticketConfig?._id.toString(),
            ticketConfig?.cost,
            ticketConfig?.quantity_numbers
        );
    }


    async createTicketConfig(data: CreateTicketConfigDTO): Promise<TicketConfigModel> {
        const ticketConfigCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                cost: data.ticketConfigCost,
                quantity_numbers: data.ticketConfigQuantityNumbers,
                created_at: new Date(),
                updated_at: null
            })

        const insertedTicketConfig = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: ticketConfigCollection.insertedId });

        return this.toMapperTicketConfigModel(insertedTicketConfig as WithId<Document>);
    }

    async findTicketsConfig(): Promise<TicketConfigModel[] | null> {
        let ticketConfigList = []

        const ticketConfigs = await DatabaseNoSQLHelper.getCollection(this.collection)
            .find().toArray();

        if (!ticketConfigs) return null;

        for (const ticketConfig of ticketConfigs) {

            ticketConfigList.push(this.toMapperTicketConfigModel(ticketConfig))
        }

        return ticketConfigList

    }

    async findTicketConfigByQuantityNumbers(quantityNumbers: number): Promise<TicketConfigModel | null> {

        const ticketConfig = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ quantity_numbers: quantityNumbers });

        if (!ticketConfig) return null;

        return this.toMapperTicketConfigModel(ticketConfig as WithId<Document>);

    }
}