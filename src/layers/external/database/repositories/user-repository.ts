import { DatabaseNoSQLHelper } from "../helpers";
import { CreateUserDTO, UserModel, UserRepositoryProtocol, } from "@/layers/use-cases";
import { WithId, Document, ObjectId, } from "mongodb";

interface Filter {
    _id: ObjectId;
}

interface Update {
    $push: {
        tickets: { $each: ObjectId[] };
    };
}
export class UserRepositoryAdapter implements UserRepositoryProtocol {
    private readonly collection: string = "users";

    private toMapperUserModel(user: WithId<Document>) {
        return new UserModel(
            user?._id.toString(),
            user?.email,
            user?.password,
            user?.balanceId,
            user?.tickets

        );
    }


    async createUser(data: CreateUserDTO): Promise<UserModel> {
        const userCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                email: data.email,
                balance_id: null,
                tickets: [],
                password: data.password,
                created_at: new Date(),
                updated_at: null,
            });

        const insertedUser = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: userCollection.insertedId });

        return this.toMapperUserModel(insertedUser as WithId<Document>);
    }

    async findByEmail(email: string): Promise<UserModel | null> {
        const user = await DatabaseNoSQLHelper.getCollection(this.collection).findOne({ email });

        if (!user) return null;

        return this.toMapperUserModel(user);
    }

    async findById(userId: string): Promise<UserModel | null> {
        const user = await DatabaseNoSQLHelper.getCollection(this.collection)
            .findOne({ _id: new ObjectId(userId) });

        if (!user) return null;

        return this.toMapperUserModel(user);

    }

    async deleteUser(userId: string): Promise<void> {
        await DatabaseNoSQLHelper.getCollection(this.collection)
            .deleteOne({ _id: new ObjectId(userId) });
    }

    async updateUserBalance(userId: string, balanceId: string): Promise<void> {
        await DatabaseNoSQLHelper.getCollection(this.collection)
            .updateOne({ _id: new ObjectId(userId) }, { $set: { balance_id: new ObjectId(balanceId) } });
    }

    async updateUserTickets(userId: string, ticketId: string): Promise<void> {
        const filter: Filter = { _id: new ObjectId(userId) };
        const update: Update = { $push: { tickets: { $each: [new ObjectId(ticketId)] } } };

        await DatabaseNoSQLHelper.getCollection(this.collection)
            .updateOne(filter, update as Document);
    }
}

