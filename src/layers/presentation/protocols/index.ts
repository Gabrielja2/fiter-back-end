import { HttpRequest, HttpResponse } from "@/layers/presentation/ports";

export interface HttpProtocol {
    handle(request: HttpRequest): Promise<HttpResponse>;
}