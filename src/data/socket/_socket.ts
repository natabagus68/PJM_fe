import { config } from "@common/utils";
import { io, Socket as ISocket, Socket } from "socket.io-client";

// export class Socket {
//   public io: ISocket;
//   private static instance: Socket;
//   private constructor() {
//     this.io = io(
//       config.socketBaseUrl == "/" ? undefined : config.socketBaseUrl
//     );
//     this.io.on("connect", () => {
//       const auth = localStorage.getItem("token");
//       if (auth) {
//         const authJson = JSON.parse(auth);
//         this.io.emit("join", authJson.lineShift.line_id);
//       } else {
//         throw "Please Log In";
//       }
//     });
//   }
//   static getInstance(): Socket {
//     if (!Socket.instance) {
//       Socket.instance = new Socket();
//     }
//     return Socket.instance;
//   }
// }
export const server = io(config.socketBaseUrl);
