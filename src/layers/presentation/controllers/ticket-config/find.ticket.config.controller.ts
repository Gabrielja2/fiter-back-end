import { HttpProtocol, HttpRequest, HttpResponse, badRequest, notFound, ok } from "@/layers/presentation";
import { FindTicketConfigUseCaseProtocol } from "@/layers/use-cases";


export class FindTicketConfigController implements HttpProtocol {

    constructor(private readonly useCase: FindTicketConfigUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {

        const response = await this.useCase.execute();

        if (response instanceof Error) return notFound(response);

        return ok(response);
    }
}