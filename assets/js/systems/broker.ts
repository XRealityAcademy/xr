import { Config } from "../config";


export const init = (config: Config) => {

    // channel connection
    const socket = config.socket;
    socket.connect();
    let channel = socket.channel(`room:${config.room_id}`, {});
    config.channel = channel;

    channel
        .join()
        .receive("ok", (resp) => {
            console.log("Joined successfully", resp);
            // config.$channel_joined.next(true);
        })
        .receive("error", (resp) => {
            console.log("Unable to join", resp);
        });

}
