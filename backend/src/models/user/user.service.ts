import { UserFactoryDAO } from './user.factory';
import { newUserI, UserI } from './user.interface';
import config from '../../config';

/**
 * @class UserService
 */
class UserService {
  private user;

  /**
   * @constructor User
   * @param {string} userId
   */
  constructor() {
    this.user = UserFactoryDAO.get(config.DB_TYPE);
  }

  /**
   * @description Add new user
   * @param {newUserI} user
   * @return {UserI}
   */
  async createUser(user: newUserI): Promise<UserI> {
    return this.user.createUser(user);
  }

  /**
   * @description Get user by email
   * @param {string} email
   * @return {UserI}
   */
  async getUser(email: string): Promise<UserI> {
    return this.user.getUser(email);
  }

  /**
   * @description Get user by email
   * @param {string} id
   * @return {UserI}
   */
  async getUserById(id: string): Promise<UserI> {
    return this.user.getUserById(id);
  }

  /**
   * @description Get users
   * @return {UserI}
   */
  async getUsers(): Promise<UserI[]> {
    return this.user.getUsers();
  }

  /**
   * @description Update user
   * @param {string} id
   * @param {newUserI} user
   * @return {UserI}
   */
  async updateUser(id: string, user: UserI): Promise<UserI> {
    return this.user.updateUser(id, user);
  }

  /**
   * @description Delete user
   * @param {string} id
   */
  async deleteUser(id: string): Promise<UserI> {
    return this.user.deleteUser(id);
  }

  /**
   * @param {UserI} user
   * @param {string} password
   * @return {boolean}
   */
  async isValidPassword(user: UserI, password: string): Promise<boolean> {
    return this.user.isValidPassword(user, password);
  }
}

export const userS = new UserService();
