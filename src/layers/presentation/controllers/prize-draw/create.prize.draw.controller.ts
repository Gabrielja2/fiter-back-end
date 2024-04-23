import { HttpProtocol, HttpRequest, HttpResponse, badRequest, created } from "@/layers/presentation";
import { CreatePrizeDrawUseCaseProtocol } from "@/layers/use-cases";


export class CreatePrizeDrawController implements HttpProtocol {

    constructor(private readonly useCase: CreatePrizeDrawUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const response = await this.useCase.execute(request.data);

        if (response instanceof Error) return badRequest(response);


        return created(response);
    }
}