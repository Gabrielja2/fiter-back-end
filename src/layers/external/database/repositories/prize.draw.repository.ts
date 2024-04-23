import { DatabaseNoSQLHelper } from "../helpers";
import { PrizeDrawRepositoryProtocol, PrizeDrawModel, CreatePrizeDrawDTO } from "@/layers/use-cases";
import { WithId, Document } from "mongodb";

export class PrizeDrawRepositoryAdapter implements PrizeDrawRepositoryProtocol {
    private readonly collection: string = "prize-draws";

    private toMapperPrizeDrawModel(prizeDraw: WithId<Document>) {
        return new PrizeDrawModel(
            prizeDraw._id.toString(),
            prizeDraw.prize_draw_sequence,
            prizeDraw.current,
            prizeDraw.numbers,
            prizeDraw.prize,
        );
    }


    async createPrizeDraw(data: CreatePrizeDrawDTO): Promise<PrizeDrawModel> {
        const PrizeDrawCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                prize_draw_sequence: data.prizeDrawSequence,
                current: data.current,
                numbers: null,
                prize: null
            })

        const insertedPrizeDraw = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: PrizeDrawCollection.insertedId });

        return this.toMapperPrizeDrawModel(insertedPrizeDraw as WithId<Document>);
    }

    async findCurrentPrizeDraw(): Promise<PrizeDrawModel | null> {

        const prizeDraw = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ current: true });

        if (!prizeDraw) return null;

        return this.toMapperPrizeDrawModel(prizeDraw as WithId<Document>);
    }


}