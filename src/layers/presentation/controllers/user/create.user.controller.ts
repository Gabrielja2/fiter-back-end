import { HttpProtocol, HttpRequest, HttpResponse, badRequest, created } from "@/layers/presentation";
import { CreateUserUseCaseProtocol } from "@/layers/use-cases";
import { Validate } from "../utils";

export class CreateUserController implements HttpProtocol {

    constructor(private readonly useCase: CreateUserUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { email, password } = request.data;

        const validation = Validate.fields(
            [
                { name: "email", type: "string" },
                { name: "password", type: "string" },

            ],
            { email, password }
        );

        if (validation instanceof Error) return badRequest(validation);

        const response = await this.useCase.execute({ email, password });

        if (response instanceof Error) return badRequest(response);

        return created(response);
    }
}