import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
export declare class ChatGateway {
    private readonly chatService;
    server: Server;
    constructor(chatService: ChatService);
    handleMessage(data: {
        content: string;
        sender: string;
        receiver: string;
    }, client: Socket): Promise<import("./message.schema").Message>;
    handleJoinRoom(room: string, client: Socket): {
        status: string;
    };
    handleLeaveRoom(room: string, client: Socket): {
        status: string;
    };
}
