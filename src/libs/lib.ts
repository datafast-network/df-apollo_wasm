import {Request} from "../types/request/Request";
import {Protobuf} from "as-proto/assembly";
import {Bytes, json, JSONValue} from "@graphprotocol/graph-ts";

export declare namespace http_client {
    // @ts-ignore
    @external("http_client", "handle_request")
    export function do_request(request: Uint8Array): Uint8Array;
}

export namespace http_client {
    export function request(request: Request): Uint8Array {
        const request_bytes = Protobuf.encode(request, Request.encode)
        return http_client.do_request(request_bytes)
    }

    export function pareJson(data: Uint8Array): JSONValue {
        return json.fromBytes(Bytes.fromUint8Array(data));
    }
}