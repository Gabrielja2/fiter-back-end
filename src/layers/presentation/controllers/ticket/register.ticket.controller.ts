import { HttpProtocol, HttpRequest, HttpResponse, InvalidTypeError, MissingParamError, badRequest, created } from "@/layers/presentation";
import { RegisterTicketUseCaseProtocol } from "@/layers/use-cases";


export class RegisterTicketController implements HttpProtocol {

    constructor(private readonly useCase: RegisterTicketUseCaseProtocol) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const tickets = request.data.tickets;

        let ticketsList = []

        for (const ticket of tickets) {
            const { ticketId, price, selectedNumbers } = ticket;

            if (!ticketId || !price || !selectedNumbers) return badRequest(new MissingParamError("ticketId, price, selectedNumbers"));
            if (typeof price !== "number") return badRequest(new InvalidTypeError("price"));
            if (!Array.isArray(selectedNumbers)) return badRequest(new InvalidTypeError("selectedNumbers"));
            if (typeof ticketId !== "number") return badRequest(new InvalidTypeError("ticketId"));

            ticketsList.push({ ticketId, price, selectedNumbers })
        }


        const response = await this.useCase.execute(ticketsList);
        if (response instanceof Error) return badRequest(response);

        return created(response);
    }
}