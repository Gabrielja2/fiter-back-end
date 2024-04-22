import { DatabaseNoSQLHelper } from "../helpers";
import { PrizeDrawRepositoryProtocol, PrizeDrawModel, RegisterPrizeDrawDTO } from "@/layers/use-cases";
import { WithId, Document } from "mongodb";

export class PrizeDrawRepositoryAdapter implements PrizeDrawRepositoryProtocol {
    private readonly collection: string = "prize-draws";

    private toMapperPrizeDrawModel(PrizeDraw: WithId<Document>) {
        return new PrizeDrawModel(
            PrizeDraw._id.toString(),
            PrizeDraw.award,
            PrizeDraw.quantity_numbers
        );
    }


    async registerPrizeDraw(data: RegisterPrizeDrawDTO): Promise<PrizeDrawModel> {
        const PrizeDrawCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                award: data.prizeDrawAward,
                numbers: data.prizeDrawNumbers,
                created_at: new Date(),
                updated_at: null
            })

        const insertedPrizeDraw = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: PrizeDrawCollection.insertedId });

        return this.toMapperPrizeDrawModel(insertedPrizeDraw as WithId<Document>);
    }


}