import { cartS } from '../../models/cart/cart.service';

describe('Cart', () => {
  it('Should get Products', async () => {
    const cart = await cartS.getCart('61c3b286a80c19a291bdd57b');
    expect(cart).toHaveProperty('direccionEntrega');
    expect(cart).toHaveProperty('userId');
    expect(cart).toHaveProperty('products');
    expect(cart).toHaveProperty('createdAt');
    expect(cart).toHaveProperty('updatedAt');
  });
});
