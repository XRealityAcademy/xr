// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html";
// Establish Phoenix Socket and LiveView configuration.
import { Socket } from "phoenix";
import { LiveSocket } from "phoenix_live_view";
import topbar from "../vendor/topbar";

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");

let liveSocket = new LiveSocket("/live", Socket, { params: { _csrf_token: csrfToken } }) as LiveSocket & Socket;


// Show progress bar on live navigation and form submits
topbar.config({ barColors: { 0: "#29d" }, shadowColor: "rgba(0, 0, 0, .3)" });
window.addEventListener("phx:page-loading-start", _info => topbar.show(300));
window.addEventListener("phx:page-loading-stop", _info => topbar.hide());

// connect if there are any LiveViews on the page
liveSocket.connect();
// liveSocket.connect();
// console.log("live socket", liveSocket);
// const room_id = window.location.pathname.match(/^\/rooms\/([^\/]+)$/)?.[1];
// console.log("What is", room_id);
// if (room_id) {
//   const channel = liveSocket.channel(`room:${room_id}`, {})
//   console.log("Attempt to Join");
//   channel.join().receive("ok", resp => { console.log("Joined successfully", resp) }).receive("error", resp => { console.log("Unable to join", resp) })
//   window["channel"] = channel;
//   channel.on("shout", payload => {
//     console.log("I received a 'shout'", payload)
//   })
// }

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
// console.log("Hello world");
window["liveSocket"] = liveSocket;


