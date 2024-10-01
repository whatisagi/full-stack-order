export type Order = {
  id: string;
  total: number;
  date: string;
  shippingAddress: string;
  customerName: string;
  customerEmail: string;
  lineItems: LineItem[];
};

export type LineItem = {
  id: string;
  name: string;
  products: {
    id: string;
    quantity: number;
  }[];
};

export type DetailedOrder = Omit<Order, "lineItems"> & {
  lineItems: DetailedLineItem[];
};

export type DetailedLineItem = Omit<LineItem, "products"> & {
  products: {
    product: Product | undefined;
    id: string;
    quantity: number;
  }[];
};

export type OrderProduct = {
  product?: Product;
  quantity: number;
  id: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
};
