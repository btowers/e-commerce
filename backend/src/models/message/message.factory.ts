import { Presistence } from '../../utils/enums';
import { Message } from './DAOs/mongo';

/**
 * @class Presistence
 */
export class MessageFactoryDAO {
  /**
   * @description Get the presistence
   * @param {Persistence} option
   * @return {mongo.DB}
   */
  static get(option: Presistence): Message {
    switch (option) {
      case Presistence.MongoDBLocal:
        return new Message(Presistence.MongoDBLocal);
      case Presistence.MongoDBSaaS:
        return new Message(Presistence.MongoDBSaaS);
      default:
        return new Message(Presistence.MongoDBLocal);
    }
  }
}
