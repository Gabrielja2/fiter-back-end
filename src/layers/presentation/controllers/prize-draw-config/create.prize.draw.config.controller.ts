import { HttpProtocol, HttpRequest, HttpResponse, InvalidTypeError, MissingParamError, badRequest, created } from "@/layers/presentation";
import { CreatePrizeDrawConfigUseCaseProtocol } from "@/layers/use-cases";


export class CreatePrizeDrawConfigController implements HttpProtocol {

    constructor(private readonly useCase: CreatePrizeDrawConfigUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { prizeDrawConfigAward, prizeDrawConfigQuantityNumbers } = request.data;


        const hasParams = prizeDrawConfigAward || prizeDrawConfigQuantityNumbers
        if (!hasParams) return badRequest(new MissingParamError("prizeDrawConfigAward or prizeDrawConfigQuantityNumbers"));

        if (typeof prizeDrawConfigAward !== "number") return badRequest(new InvalidTypeError("prizeDrawConfigAward"));
        if (typeof prizeDrawConfigQuantityNumbers !== "number") return badRequest(new InvalidTypeError("prizeDrawConfigQuantityNumbers"));

        const response = await this.useCase.execute({
            prizeDrawConfigAward,
            prizeDrawConfigQuantityNumbers
        });

        if (response instanceof Error) return badRequest(response);

        return created(response);
    }
}