import { Model } from 'mongoose';
import { Message, MessageDocument } from './message.schema';
export declare class ChatService {
    private messageModel;
    constructor(messageModel: Model<MessageDocument>);
    createMessage(messageData: {
        content: string;
        sender: string;
        receiver: string;
    }): Promise<Message>;
    getReceiverMessage(userId: string): Promise<Message[]>;
    getMessages(userId: string, partnerId: string): Promise<Message[]>;
}
