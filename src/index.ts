import {json, JSONValue, log} from "@graphprotocol/graph-ts";
import {Protobuf} from "as-proto/assembly";
import {TestEvent} from "./types/model/TestEvent";
import {handleRequest} from "./http_client_test";

export {handleRequest};
export function testLogInfo(message: string): void {
    log.info(message, []);
}

export function handleJson(event: JSONValue): void {
    const testEvent = event.toObject()
    const event_name = testEvent.get("name")!.toString()
    if (event_name) {
        log.info(event_name, [])
    }
    const event_data = testEvent.get("data")!.toString()
    if (event_data) {
        log.info(event_data, [])
    }
}

export function handleProtobuf(buffer: Uint8Array): void {
    const event = Protobuf.decode<TestEvent>(buffer, TestEvent.decode)
    log.info(event.name, [])
    if (event.data1) {
        log.info(`Event data1 name:`, [event.data1!.name])
    }
    if (event.data2) {
        log.info(`Event data2 id:`, [`${event.data2!.id}`])
    }
}
