import { CreateUserController, InvalidTypeError, MissingParamError, badRequest } from "@/layers/presentation";
import { CreateUserStub } from "./stubs";

const makeSut = () => {
    const createUserStub = new CreateUserStub();
    const sut = new CreateUserController(createUserStub);

    return {
        sut,
        createUserStub
    };
};

const makeBody = (email: unknown, password: unknown) => {
    return {
        email,
        password,

    };
};

describe("Presentation - CreateUserController", () => {


    test("Should not create user, if email is empty", async () => {
        const data = makeBody("", "any_password");
        const { sut } = makeSut();

        const result = await sut.handle({ data });

        expect(result).toEqual(badRequest(new MissingParamError("email")));
    });

    test("Should not create user, if password is empty", async () => {
        const data = makeBody("any_email", "any_password");
        const { sut } = makeSut();

        const result = await sut.handle({ data });

        expect(result).toEqual(badRequest(new MissingParamError("password")));
    });


    test("Should not create user, if email is with type error", async () => {
        const data = makeBody(123, "any_password");
        const { sut } = makeSut();

        const result = await sut.handle({ data });

        expect(result).toEqual(badRequest(new InvalidTypeError("email")));
    });

    test("Should not create user, if password is with type error", async () => {
        const data = makeBody("any_email", "any_password");
        const { sut } = makeSut();

        const result = await sut.handle({ data });

        expect(result).toEqual(badRequest(new InvalidTypeError("password")));
    });


    test("Should not create user, if use case return an error", async () => {
        const data = makeBody("any_email", "any_password");
        const { sut, createUserStub } = makeSut();
        jest.spyOn(createUserStub, "execute").mockReturnValueOnce(Promise.resolve(new Error("error")));

        const result = await sut.handle({ data });

        expect(result).toEqual(badRequest(new Error("error")));
    });

    test("Should create user", async () => {
        const data = makeBody("email@test.com", "Password1234");
        const { sut } = makeSut();

        const result = await sut.handle({ data });


        expect(result.statusCode).toEqual(201);
        expect(result.response.email).toEqual(data.email);
    });

});