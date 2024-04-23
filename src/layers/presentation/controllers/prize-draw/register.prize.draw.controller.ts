import { HttpProtocol, HttpRequest, HttpResponse, InvalidTypeError, MissingParamError, badRequest, created } from "@/layers/presentation";
import { CreatePrizeDrawUseCaseProtocol } from "@/layers/use-cases";


export class CreatePrizeDrawController implements HttpProtocol {

    constructor(private readonly useCase: CreatePrizeDrawUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { prizeDrawNumbers } = request.data;


        const hasParam = prizeDrawNumbers
        if (!hasParam) return badRequest(new MissingParamError("prizeDrawQuantityNumbers"));

        if (typeof prizeDrawNumbers !== "number") return badRequest(new InvalidTypeError("prizeDrawNumbers"));


        return created({ prizeDrawNumbers });
    }
}