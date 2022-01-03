import Joi from 'joi';
import { BodyI } from '../middleware/validator';

import {
  newProductI,
  updateProductI,
} from '../models/product/product.interface';
import { ErrorCode } from '../utils/enums';
import { ObjectIdValidator } from '../utils/idValidator';

/**
 * @class Validator
 */
class Validator {
  /**
   * @description New Product Validator
   * @param {newProductI} product
   * @return {Promise}
   */
  newProduct = (product: newProductI) => {
    const schema = Joi.object({
      nombre: Joi.string().required(),
      categoria: Joi.string().required(),
      descripcion: Joi.string().required(),
      stock: Joi.number().required(),
      precio: Joi.number().required(),
    });
    return schema.validateAsync(product);
  };

  /**
   * @description Update Product Validator
   * @param {object} product
   * @return {Promise}
   */
  updateProduct = (product: updateProductI) => {
    const schema = Joi.object({
      nombre: Joi.string(),
      descripcion: Joi.string(),
      categoria: Joi.string(),
      foto: Joi.string(),
      stock: Joi.number().min(0),
      precio: Joi.number().min(0),
    });
    return schema.validateAsync(product);
  };

  /**
   * @description Update Product Validator
   * @param {object} product
   * @return {Promise}
   */
  productToCart = (product: object) => {
    const schema = Joi.object({
      product: Joi.custom(ObjectIdValidator).required().messages({
        'product.error': `invalid ObjectId`,
      }),
      qty: Joi.number().min(1).required(),
    });
    return schema.validateAsync(product);
  };

  /**
   * @description User Validator
   * @param {object} user
   * @return {Promise}
   */
  user = (user: object) => {
    const schema = Joi.object({
      nombre: Joi.string().required().min(3).max(50),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
      password: Joi.string()
        .required()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
        )
        .error(new Error(ErrorCode.InvalidPassword)),
      confirmPassword: Joi.string().required(),
      direccion: {
        calle: Joi.string().required().max(150),
        altura: Joi.number().required().min(0),
        cp: Joi.string().required().max(20),
        piso: Joi.string().required().max(5),
        departamento: Joi.string().required().max(5),
      },
      telefono: Joi.string().required(),
      admin: Joi.boolean(),
    });
    return schema.validateAsync(user);
  };

  /**
   * @description Params Validator
   * @param {object} params
   * @return {Promise}
   */
  params = (params: object) => {
    const schema = Joi.object({
      _id: Joi.string().custom(ObjectIdValidator).messages({
        'id.error': `invalid ObjectId`,
      }),
      categoria: Joi.string().min(3).max(50),
    });
    return schema.validateAsync(params);
  };

  /**
   * @description Query Validator
   * @param {object} query
   * @return {Promise}
   */
  query = (query: object) => {
    const schema = Joi.object({
      id: Joi.string().custom(ObjectIdValidator).messages({
        'id.error': `invalid ObjectId`,
      }),
      categoria: Joi.string().max(50),
      nombre: Joi.string().min(3).max(50),
    });
    return schema.validateAsync(query);
  };

  /**
   * @description ID Validator
   * @param {object} id
   * @return {Promise}
   */
  id = (id: string) => {
    const schema = Joi.string().custom(ObjectIdValidator).required().messages({
      'id.error': `invalid ObjectId`,
    });
    return schema.validateAsync(id);
  };

  /**
   * @description Image Name Validator
   * @param {object} body
   * @return {Promise}
   */
  body = (body: BodyI) => {
    const schema = Joi.object({
      filename: Joi.string().required(),
      product: Joi.string().custom(ObjectIdValidator).required().messages({
        'product.error': `invalid ObjectId`,
      }),
    });
    return schema.validateAsync(body);
  };
}
export const validatorS = new Validator();
