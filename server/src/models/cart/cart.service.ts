import mongoose from 'mongoose';
import { CartFactoryDAO } from './cart.factory';
import { CartI } from './cart.interface';
import { UserI } from '../user/user.interface';
import { ErrorCode } from '../../utils/enums';
import { productS } from '../product/product.service';
import config from '../../config';

/**
 * @class CartService
 */
class CartService {
  private carts;

  /**
   * @constructor Cart
   * @param {string} cartId
   */
  constructor() {
    this.carts = CartFactoryDAO.get(config.DB_TYPE);
  }

  /**
   *
   * @param {string} userId
   * @return {Promise<CartI>}
   */
  async getCart(userId: string): Promise<CartI> {
    const id = new mongoose.Types.ObjectId(userId);
    return this.carts.getCart(id);
  }

  /**
   *
   * @param {UserI} user
   * @return {Promise<CartI>}
   */
  async createCart(user: UserI): Promise<CartI> {
    return this.carts.createCart(user);
  }

  /**
   *
   * @param {string} userId
   * @return {Promise<CartI>}
   */
  async emptyCart(userId: string): Promise<CartI> {
    return this.carts.emptyCart(userId);
  }

  /**
   *
   * @param {string} cartId
   * @param {object} product
   * @return {Promise<CartI>}
   */
  async addProductToCart(
    cartId: string,
    product: { product: mongoose.Types.ObjectId; qty: number }
  ): Promise<CartI> {
    const query = { _id: product.product };
    const result = await productS.getProducts(query);
    if (!result.length) throw new Error(ErrorCode.BadRequest);
    if (result[0].stock < product.qty)
      throw new Error(ErrorCode.NotEnoughStock);
    return this.carts.addProductToCart(cartId, product);
  }

  /**
   *
   * @param {string} cartId
   * @param {object} product
   */
  async deleteProductFromCart(
    cartId: string,
    product: { product: mongoose.Types.ObjectId; qty: number }
  ) {
    const query = { _id: product.product };
    const result = await productS.getProducts(query);
    if (result.length < 1) throw new Error(ErrorCode.BadRequest);
    return this.carts.deleteProductFromCart(cartId, product);
  }

  /**
   *
   * @param {String} productId
   */
  async deleteProductFromAllCarts(productId: string) {
    return this.carts.deleteProductFromAllCarts(productId);
  }
}

export const cartS = new CartService();
