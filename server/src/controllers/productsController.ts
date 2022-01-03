import { NextFunction, Request, Response } from 'express';
import { cartS } from '../models/cart/cart.service';
import { ProductI, ProductQuery } from '../models/product/product.interface';
import { productS } from '../models/product/product.service';
import { ErrorCode } from '../utils/enums';
import 'express-async-errors';

/**
 * @class ProductsController
 */
class ProductsController {
  /**
   * @description Save a new product
   * @param {Request} _req
   * @param {Response} res
   * @param {NextFunction} next
   */
  createProduct = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const savedProduct: ProductI = await productS.createProduct(
      res.locals.product
    );
    res.status(201).json({ data: savedProduct });
  };

  /**
   * @description Get products
   * @param {Request} _req
   * @param {Response} res
   * @param {NextFunction} next
   */
  getProducts = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const query: ProductQuery = { ...res.locals.params, ...res.locals.query };
    const products = await productS.getProducts(query);
    res.status(200).json({ data: products });
  };

  /**
   * @description Update a product
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const updatedProduct = await productS.updateProduct(
      res.locals.params._id,
      res.locals.product
    );
    if (!updatedProduct) throw Error(ErrorCode.ProductsNotFound);
    res.status(200).json({ data: updatedProduct });
  };

  /**
   * @description Delete a product
   * @param {Request} _req
   * @param {Response} res
   * @param {NextFunction} next
   */
  deleteProduct = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    await productS.deleteProduct(res.locals.params._id);
    await cartS.deleteProductFromAllCarts(res.locals.params._id);
    res.status(200).json({ data: { message: 'Product deleted' } });
  };
}

export const productsC = new ProductsController();
