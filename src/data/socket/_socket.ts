import { config } from "@common/utils";
import { io, Socket as ISocket } from "socket.io-client";

export class Socket {
  public io: ISocket;
  private static instance: Socket;
  private constructor() {
    this.io = io(
      config.socketBaseUrl == "/" ? undefined : config.socketBaseUrl
    );
    console.log("Connecting...");
    this.io.on("connect", () => {
      console.log("Connected...");
    });
  }
  static getInstance(): Socket {
    if (!Socket.instance) {
      Socket.instance = new Socket();
    }
    return Socket.instance;
  }
}
