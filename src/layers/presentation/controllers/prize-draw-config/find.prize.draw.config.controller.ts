import { HttpProtocol, HttpRequest, HttpResponse, badRequest, notFound, ok } from "@/layers/presentation";
import { FindPrizeDrawConfigUseCaseProtocol } from "@/layers/use-cases";


export class FindPrizeDrawConfigController implements HttpProtocol {

    constructor(private readonly useCase: FindPrizeDrawConfigUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {

        const response = await this.useCase.execute();

        if (response instanceof Error) return notFound(response);

        return ok(response);
    }
}