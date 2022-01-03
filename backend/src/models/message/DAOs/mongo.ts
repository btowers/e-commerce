import mongoose, { Schema } from 'mongoose';
import config from '../../../config';
import { Presistence } from '../../../utils/enums';
import { MessageBaseClass, MessageI } from '../message.interface';

const MessageSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'UserSchema' },
    type: {
      type: String,
      enum: {
        values: ['usuario', 'sistema'],
        message:
          'El mensaje debe enviarse desde el servidor o recibirse de un usuario',
      },
      required: true,
    },
    message: { type: String, required: true, maxlength: 500 },
  },
  { timestamps: { createdAt: 'createdAt' } }
);

/**
 * @class MessageRepository
 */
export class Message implements MessageBaseClass {
  private srv = `mongodb://localhost:27017/${config.MONGO_DB_NAME}`;
  private MessageModel: any;

  /**
   * @constructor
   * @param {Presistence} option
   */
  constructor(option: Presistence) {
    if (option == Presistence.MongoDBLocal) {
      this.srv = `mongodb://localhost:27017/${config.MONGO_DB_NAME}`;
    } else {
      this.srv = config.MONGO_ATLAS_URI;
    }
    mongoose.connect(this.srv);
    this.MessageModel = mongoose.model<MessageI>('message', MessageSchema);
  }

  /**
   * @description Read message from repo
   * @param {string} userId The user owner of the message
   * @param {MessageI} message The user owner of the message
   * @return {Promise} The stored product
   */
  async createMessage(userId: string, message: any): Promise<MessageI> {
    return this.MessageModel.create({
      userId: userId,
      type: message.sent == true ? 'usuario' : 'sistema',
      message: message.text,
    });
  }

  /**
   * @description Read message from repo
   * @param {string} userId The user owner of the message
   * @return {Promise} The stored product
   */
  async getMessages(userId: string): Promise<MessageI[]> {
    return this.MessageModel.find({
      userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(6);
  }
}
