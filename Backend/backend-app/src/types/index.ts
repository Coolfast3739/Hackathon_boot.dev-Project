export interface CustomRequest {
    body: Record<string, any>;
    params: Record<string, string>;
    query: Record<string, string>;
}

export interface CustomResponse<T = any> {
    status: (statusCode: number) => CustomResponse<T>;
    json: (body: T) => void;
    send: (body: string) => void;
}