import { DatabaseNoSQLHelper } from "../helpers";
import { BalanceModel, BalanceRepositoryProtocol, RegisterBalanceDTO } from "@/layers/use-cases";
import { WithId, Document, ObjectId } from "mongodb";

export class BalanceRepositoryAdapter implements BalanceRepositoryProtocol {
    private readonly collection: string = "balances";

    private toMapperBalanceModel(balance: WithId<Document>) {
        return new BalanceModel(
            balance?._id.toString(),
            balance?.user_id,
            balance?.balance
        );
    }


    async registerBalance(data: RegisterBalanceDTO): Promise<BalanceModel> {

        const balanceCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                user_id: new ObjectId(data.userId),
                balance: data.balance,
                created_at: new Date(),
                updated_at: null,

            })

        const insertedBalance = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: balanceCollection.insertedId });


        return this.toMapperBalanceModel(insertedBalance as WithId<Document>);
    }

    async findBalanceByUserId(userId: string): Promise<BalanceModel | null> {

        const balance = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ user_id: new ObjectId(userId) });

        if (!balance) return null;

        return this.toMapperBalanceModel(balance as WithId<Document>);
    }

}