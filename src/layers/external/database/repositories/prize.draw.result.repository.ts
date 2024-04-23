import { DatabaseNoSQLHelper } from "../helpers";
import { PrizeDrawResultRepositoryProtocol, CreatePrizeDrawResultDTO, PrizeDrawResultModel } from "@/layers/use-cases";
import { WithId, Document, ObjectId } from "mongodb";

export class PrizeDrawResultRepositoryAdapter implements PrizeDrawResultRepositoryProtocol {
    private readonly collection: string = "prize-draw-results";

    private toMapperPrizeDrawResultModel(prizeDrawResult: WithId<Document>) {
        return new PrizeDrawResultModel(
            prizeDrawResult._id.toString(),
            prizeDrawResult.prize_draw_id,
            prizeDrawResult.draw_numbers,
            prizeDrawResult.winner_ticket_id,
            prizeDrawResult.draw_prize,
        );
    }


    async createPrizeDrawResult(data: CreatePrizeDrawResultDTO): Promise<PrizeDrawResultModel> {
        console.log('data', data);

        const prizeDrawResultCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                prize_draw_id: new ObjectId(data.prizeDrawId),
                draw_numbers: data.drawNumbers,
                winner_ticket_id: data.winnerTicketId ? new ObjectId(data.winnerTicketId) : null,
                draw_prize: data.drawPrize ?? 0,
                created_at: new Date(),
                updated_at: null
            })

        const insertedPrizeDrawResult = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: prizeDrawResultCollection.insertedId });

        return this.toMapperPrizeDrawResultModel(insertedPrizeDrawResult as WithId<Document>);
    }

    async findWinnersByWinnerTicketId(winnerTicketId: string): Promise<PrizeDrawResultModel[] | null> {
        let winnersList = []
        const winners = await DatabaseNoSQLHelper.getCollection(this.collection)
            .find({ winner_ticket_id: new ObjectId(winnerTicketId) }).toArray();

        if (!winners) return null;

        for (const winner of winners) {
            winnersList.push(this.toMapperPrizeDrawResultModel(winner as WithId<Document>));
        }

        return winnersList
    }
}