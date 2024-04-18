import { DatabaseNoSQLHelper } from "../helpers";
import { CreateUserDTO, UserModel, UserRepositoryProtocol, } from "@/layers/use-cases";
import { WithId, Document, ObjectId } from "mongodb";

export class UserRepositoryAdapter implements UserRepositoryProtocol {
    private readonly collection: string = "users";

    private toMapperUserModel(user: WithId<Document>) {
        return new UserModel(
            user?._id.toString(),
            user?.email,
            user?.password,
            user?.balance,

        );
    }


    async createUser(data: CreateUserDTO): Promise<UserModel> {
        const userCollection = await DatabaseNoSQLHelper.getCollection(this.collection)
            .insertOne({
                email: data.email,
                password: data.password,
                balance: 50000,
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
}