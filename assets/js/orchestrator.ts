import * as Scene from "./systems/scene";
import * as Broker from "./systems/broker";
import { Config } from "./config";
import type { Socket } from "phoenix";

export const orchestrator = {
    init: (opts: { socket: Socket, room_id: string }) => {
        const config: Config = {
            room_id: opts.room_id,
            //   user_id: opts.user_id,
            scene: null,
            socket: opts.socket,
            channel: null
        }

        // debug
        window["config"] = config

        // initialize systems, order matters
        Scene.init(config)
        Broker.init(config)

    }
}

const socket = window["liveSocket"]
const { room_id, user_id } = window["room_vars"]

orchestrator.init({ socket, room_id });
