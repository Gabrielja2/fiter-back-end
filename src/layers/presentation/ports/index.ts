export type HttpRequest = {
    headers?: any;
    data?: any;
    userId?: string;
    query?: any;
    params?: any;
}

export type HttpResponse = {
    statusCode: number;
    response?: any;
}