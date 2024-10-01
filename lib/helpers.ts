import { orders, products } from "@/data/order";
import { DetailedOrder, Order, OrderProduct } from "@/types/order";

// Return the list of all orders of a given date
export function getOrdersByDate(date: string): DetailedOrder[] {
  const filteredOrders = orders.filter((order) => order.date === date);

  return filteredOrders.map((order) => {
    return {
      ...order,
      lineItems: order.lineItems.map((li) => ({
        ...li,
        products: li.products.map((p) => {
          const product = products.find((product) => product.id === p.id);
          return { product, quantity: p.quantity, id: p.id };
        }),
      })),
    };
  });
}

// Return the list of products from all orders of a given date
export function getOrderProductsByDate(date: string): OrderProduct[] {
  const filteredOrders = orders.filter((order) => order.date === date);

  return filteredOrders.reduce((acc: OrderProduct[], order: Order) => {
    const lineItems = order.lineItems;
    lineItems.forEach((item) => {
      item.products.forEach((p) => {
        const product = products.find((product) => product.id === p.id);

        acc.push({ product, quantity: p.quantity, id: p.id });
      });
    });
    return acc;
  }, []);
}

// Return the list of products with associated quantities for each product
export function computeTotalOrderProducts(products: OrderProduct[]) {
  return products.reduce(
    (acc: { [key: string]: number }, orderProduct: OrderProduct) => {
      if (!!orderProduct.product) {
        acc[orderProduct.product.name] =
          (acc[orderProduct.product.name] || 0) + orderProduct.quantity;
      } else {
        acc[orderProduct.id] =
          (acc[orderProduct.id] || 0) + orderProduct.quantity;
      }

      return acc;
    },
    {}
  );
}
