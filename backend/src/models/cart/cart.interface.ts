import mongoose from 'mongoose';
import { UserI } from '../user/user.interface';

export interface CartI {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  direccionEntrega: {
    calle: string;
    altura: string;
    cp: string;
    piso?: string;
    departamento?: string;
  };
  products: [{ product: mongoose.Types.ObjectId; qty: number }];
  createdAt: Date;
  updatedAt: Date;
}

export interface newCartI {
  direccion: {
    calle: string;
    altura: string;
    cp: string;
    piso?: string;
    departamento?: string;
  };
  products: [{ product: mongoose.Types.ObjectId; qty: number }];
}

export interface CartBaseClass {
  getCart(userId: mongoose.Types.ObjectId): Promise<CartI>;
  createCart(user: UserI): Promise<CartI>;
  emptyCart(userId: string): Promise<CartI>;
  addProductToCart(
    userId: string,
    product: { product: mongoose.Types.ObjectId; qty: number }
  ): Promise<any>;
  deleteProductFromCart(
    cartId: string,
    product: { product: mongoose.Types.ObjectId; qty: number }
  ): Promise<any>;
}
