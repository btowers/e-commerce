import mongoose from 'mongoose';

export interface ProductI {
  _id: mongoose.Types.ObjectId;
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  stock: number;
  fotos: Array<string>;
}

export interface newProductI {
  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  stock: number;
}

export interface updateProductI {
  nombre?: string;
  descripcion?: string;
  categoria?: string;
  fotos?: Array<string>;
  precio?: number;
  stock?: number;
}

export interface ProductQuery {
  categoria?: string;
  _id?: string;
  nombre?: string;
}

export interface ProductBaseClass {
  getProducts(query?: ProductQuery): Promise<ProductI[]>;
  createProduct(data: newProductI): Promise<ProductI>;
  updateProduct(id: string, product: newProductI): Promise<ProductI>;
  updateStockProduct(id: string, qty: number): Promise<ProductI>;
  deleteProduct(id: string): Promise<ProductI>;
}
