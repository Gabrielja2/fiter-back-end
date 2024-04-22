import { DatabaseNoSQLHelper } from "../helpers";
import { PrizeDrawConfigRepositoryProtocol, PrizeDrawConfigModel, CreatePrizeDrawConfigDTO } from "@/layers/use-cases";
import { WithId, Document } from "mongodb";

export class PrizeDrawConfigRepositoryAdapter implements PrizeDrawConfigRepositoryProtocol {
    private readonly collection: string = "prize-draw-configs";

    private toMapperPrizeDrawConfigModel(PrizeDrawConfig: WithId<Document>) {
        return new PrizeDrawConfigModel(
            PrizeDrawConfig._id.toString(),
            PrizeDrawConfig.award,
            PrizeDrawConfig.quantity_numbers
        );
    }


    async createPrizeDrawConfig(data: CreatePrizeDrawConfigDTO): Promise<PrizeDrawConfigModel> {
        const PrizeDrawConfigCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                award: data.prizeDrawConfigAward,
                quantity_numbers: data.prizeDrawConfigQuantityNumbers,
                created_at: new Date(),
                updated_at: null
            })

        const insertedPrizeDrawConfig = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: PrizeDrawConfigCollection.insertedId });

        return this.toMapperPrizeDrawConfigModel(insertedPrizeDrawConfig as WithId<Document>);
    }

    async findPrizeDrawsConfig(): Promise<PrizeDrawConfigModel[] | null> {
        let prizeDrawConfigList = []

        const PrizeDrawConfigs = await DatabaseNoSQLHelper.getCollection(this.collection)
            .find().toArray();

        if (!PrizeDrawConfigs) return null;

        for (const PrizeDrawConfig of PrizeDrawConfigs) {
            prizeDrawConfigList.push(this.toMapperPrizeDrawConfigModel(PrizeDrawConfig))
        }

        return prizeDrawConfigList

    }

    async findPrizeDrawConfigByQuantityNumbers(quantityNumbers: number): Promise<PrizeDrawConfigModel | null> {

        const ticketConfig = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ quantity_numbers: quantityNumbers });

        if (!ticketConfig) return null;

        return this.toMapperPrizeDrawConfigModel(ticketConfig as WithId<Document>);

    }
}