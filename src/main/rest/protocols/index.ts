import { HttpRequest, HttpResponse } from "@/main/rest/types";

export interface HttpProtocol {
    handle(request: HttpRequest): Promise<HttpResponse>;
}