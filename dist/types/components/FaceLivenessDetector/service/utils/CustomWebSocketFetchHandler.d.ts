import { HttpRequest, HttpResponse } from '@smithy/protocol-http';
import { Provider, RequestHandler, RequestHandlerMetadata } from '@smithy/types';
export interface WebSocketFetchHandlerOptions {
    /**
     * The maximum time in milliseconds that the connection phase of a request
     * may take before the connection attempt is abandoned.
     */
    connectionTimeout?: number;
}
/**
 * Base handler for websocket requests and HTTP request. By default, the request input and output
 * body will be in a ReadableStream, because of interface consistency among middleware.
 * If ReadableStream is not available, like in React-Native, the response body
 * will be an async iterable.
 */
export declare class CustomWebSocketFetchHandler {
    readonly metadata: RequestHandlerMetadata;
    private readonly configPromise;
    private readonly httpHandler;
    private readonly sockets;
    private readonly utf8decoder;
    constructor(options?: WebSocketFetchHandlerOptions | Provider<WebSocketFetchHandlerOptions>, httpHandler?: RequestHandler<any, any>);
    /**
     * Destroys the WebSocketHandler.
     * Closes all sockets from the socket pool.
     */
    destroy(): void;
    handle(request: HttpRequest): Promise<{
        response: HttpResponse;
    }>;
    /**
     * Removes all closing/closed sockets from the socket pool for URL.
     */
    private removeNotUsableSockets;
    private waitForReady;
    private connect;
}
