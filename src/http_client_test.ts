import {log} from "@graphprotocol/graph-ts";
import {Request} from "./types/request/Request";
import {Method} from "./types/request/Method";
import {Header} from "./types/request/Header";
import {ResponseType} from "./types/request/ResponseType";
import {http_client} from "./libs/lib";

export function handleRequest(): void {
    const request = new Request(
        Method.GET,
        "https://jsonplaceholder.typicode.com/todos/1",
        new Uint8Array(0),
        [
            new Header("Content-Type", "application/json")
        ],
        ResponseType.JSON
    )
    const data = http_client.request(request);
    const json = http_client.pareJson(data).toObject();
    const title = json.get("title")!.toString();
    log.info(title, []);

}