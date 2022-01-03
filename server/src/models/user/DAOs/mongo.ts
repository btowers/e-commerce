/* eslint-disable no-invalid-this */
import mongoose, { Schema } from 'mongoose';
import config from '../../../config';
import { Presistence } from '../../../utils/enums';

import { newUserI, UserBaseClass, UserI } from '../user.interface';

import bcrypt from 'bcryptjs';

const UserSchema = new Schema<UserI>({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  direccion: {
    calle: { type: String, required: true },
    altura: { type: String, required: true },
    cp: { type: String, required: true },
    piso: { type: String },
    departamento: { type: String },
  },
  admin: { type: Boolean, default: false },
});

UserSchema.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);
  this.password = hash;
  next();
});

/**
 * @class User
 */
export class User implements UserBaseClass {
  private srv = `mongodb://localhost:27017/${config.MONGO_DB_NAME}`;
  private UserModel: any;

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
    this.UserModel = mongoose.model<UserI>('user', UserSchema);
  }

  /**
   * @description Add new user
   * @param {newUserI} user
   * @return {UserI}
   */
  async createUser(user: newUserI): Promise<UserI> {
    return this.UserModel.create(user);
  }

  /**
   * @description Get user by email
   * @param {string} email
   * @return {UserI}
   */
  async getUser(email: string): Promise<UserI> {
    return this.UserModel.findOne({ email: email }, { __v: 0 });
  }

  /**
   * @description Get user by id
   * @param {string} id
   * @return {UserI}
   */
  async getUserById(id: string): Promise<UserI> {
    return this.UserModel.findById(id, { password: 0, __v: 0 });
  }

  /**
   * @description Get users
   * @return {UserI}
   */
  async getUsers(): Promise<UserI[]> {
    return this.UserModel.find({ password: 0, _id: 0, __v: 0 });
  }

  /**
   * @description Update user
   * @param {string} id
   * @param {newUserI} user
   * @return {UserI}
   */
  async updateUser(id: string, user: UserI): Promise<UserI> {
    return this.UserModel.findByIdAndUpdate(
      { id },
      { $set: { user } },
      { password: 0, _id: 0, __v: 0 },
      { new: true }
    );
  }

  /**
   * @description Delete user
   * @param {string} id
   */
  async deleteUser(id: string): Promise<UserI> {
    return this.UserModel.findByIdAndDelete({ id });
  }

  /**
   * @param {UserI} user
   * @param {string} password
   * @return {boolean}
   */
  async isValidPassword(user: UserI, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }
}
