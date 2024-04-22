import { HttpProtocol, HttpRequest, HttpResponse, InvalidTypeError, MissingParamError, badRequest, created } from "@/layers/presentation";
import { CreateTicketConfigUseCaseProtocol } from "@/layers/use-cases";


export class CreateTicketConfigController implements HttpProtocol {

    constructor(private readonly useCase: CreateTicketConfigUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { ticketConfigCost, ticketConfigQuantityNumbers } = request.data;


        const hasParams = ticketConfigCost || ticketConfigQuantityNumbers
        if (!hasParams) return badRequest(new MissingParamError("ticketConfigCost or ticketConfigQuantityNumbers"));

        if (typeof ticketConfigCost !== "number") return badRequest(new InvalidTypeError("ticketConfigCost"));
        if (typeof ticketConfigQuantityNumbers !== "number") return badRequest(new InvalidTypeError("ticketConfigQuantityNumbers"));

        const response = await this.useCase.execute({
            ticketConfigCost,
            ticketConfigQuantityNumbers
        });

        if (response instanceof Error) return badRequest(response);

        return created(response);
    }
}