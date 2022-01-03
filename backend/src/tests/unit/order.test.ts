import { orderS } from '../../models/order/order.service';

describe('Order', () => {
  it('Should get Orders', async () => {
    const orders = await orderS.getOrders();
    orders.forEach((order) => {
      expect(order).toHaveProperty('userId');
      expect(order).toHaveProperty('items');
      expect(order).toHaveProperty('total');
      expect(order).toHaveProperty('status');
    });
  });
});
