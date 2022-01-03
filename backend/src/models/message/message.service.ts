import config from '../../config';
import { MessageI } from './message.interface';
import { MessageFactoryDAO } from './message.factory';

/**
 * @class MessageService
 */
class MessageService {
  private message;

  /**
   * @constructor Message
   * @param {string} messageId
   */
  constructor() {
    this.message = MessageFactoryDAO.get(config.DB_TYPE);
  }

  /**
   * @description Save a new message
   * @param {string} userId
   * @param {MessageI} message
   */
  async createMessage(userId: string, message: any): Promise<MessageI> {
    return this.message.createMessage(userId, message);
  }

  /**
   * @description Get messages
   * @param {any} userId
   */
  async getMessages(userId: string): Promise<any> {
    const messages = await this.message.getMessages(userId);
    return messages;
  }
}

export const messageS = new MessageService();
