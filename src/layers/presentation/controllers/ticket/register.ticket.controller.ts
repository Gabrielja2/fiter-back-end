import { HttpProtocol, HttpRequest, HttpResponse, InvalidTypeError, MissingParamError, badRequest, created } from "@/layers/presentation";
import { RegisterTicketUseCaseProtocol } from "@/layers/use-cases";


export class RegisterTicketController implements HttpProtocol {

    constructor(private readonly useCase: RegisterTicketUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const tickets = request.data.tickets;
        const userId = request.userId;

        let ticketsList = []

        for (const ticket of tickets) {
            const { ticketId, price, selectedNumbers } = ticket;

            const hasParams = ticketId || price || selectedNumbers
            if (!hasParams) return badRequest(new MissingParamError("ticketId or price or selectedNumbers"));

            const isArray = Array.isArray(selectedNumbers)
            if (!isArray) return badRequest(new InvalidTypeError("selectedNumbers"));

            if (typeof price !== "number") return badRequest(new InvalidTypeError("price"));
            if (typeof ticketId !== "number") return badRequest(new InvalidTypeError("ticketId"));

            ticketsList.push({ ticketId, price, selectedNumbers })
        }


        const response = await this.useCase.execute(ticketsList, userId as string);

        if (response instanceof Error) return badRequest(response);

        return created(response);
    }
}