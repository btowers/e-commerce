import { productS } from '../../models/product/product.service';

describe('Products', () => {
  it('Should get Products', async () => {
    const products = await productS.getProducts();
    products.forEach((product) => {
      expect(product).toHaveProperty('nombre');
      expect(product).toHaveProperty('stock');
      expect(product).toHaveProperty('precio');
      expect(product).toHaveProperty('fotos');
    });
  });
});
