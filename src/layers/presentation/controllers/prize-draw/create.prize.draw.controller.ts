import { HttpProtocol, HttpRequest, HttpResponse, InvalidTypeError, MissingParamError, badRequest, created } from "@/layers/presentation";
import { RegisterPrizeDrawUseCaseProtocol } from "@/layers/use-cases";


export class RegisterPrizeDrawController implements HttpProtocol {

    constructor(private readonly useCase: RegisterPrizeDrawUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { prizeDrawAward, prizeDrawNumbers } = request.data;


        const hasParams = prizeDrawAward || prizeDrawNumbers
        if (!hasParams) return badRequest(new MissingParamError("prizeDrawAward or prizeDrawQuantityNumbers"));

        if (typeof prizeDrawAward !== "number") return badRequest(new InvalidTypeError("prizeDrawAward"));
        if (typeof prizeDrawNumbers !== "number") return badRequest(new InvalidTypeError("prizeDrawNumbers"));





        return created({ prizeDrawAward, prizeDrawNumbers });
    }
}