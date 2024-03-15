import type { Socket, Channel } from "phoenix"
import type { Scene } from "@babylonjs/core/scene"

export type Config = {
    room_id: string
    // user_id: string
    scene: Scene
    socket: Socket
    channel: Channel
}