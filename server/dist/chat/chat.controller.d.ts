import { ChatService } from './chat.service';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    getReceiverMessage(userId: string): Promise<import("./message.schema").Message[]>;
    getMessages(userId: string, partnerId: string): Promise<import("./message.schema").Message[]>;
}
