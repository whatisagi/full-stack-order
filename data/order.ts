import { Order, Product } from "../types/order";

export const orders: Order[] = [
  {
    id: "ord-001",
    total: 800,
    date: "2024-09-01",
    shippingAddress: "100 Dundas Street East",
    customerName: "John S1",
    customerEmail: "john.s1@gmail.com",
    lineItems: [
      {
        id: "li-001",
        name: "LineItem1 Box",
        products: [
          {
            id: "prod-001",
            quantity: 1,
          },
          {
            id: "prod-002",
            quantity: 2,
          },
          {
            id: "prod-003",
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    id: "ord-002",
    total: 3000,
    date: "2024-09-02",
    shippingAddress: "200 Dundas Street East",
    customerName: "John S2",
    customerEmail: "john.s2@gmail.com",
    lineItems: [
      {
        id: "li-001",
        name: "LineItem1 Box",
        products: [
          {
            id: "prod-001",
            quantity: 1,
          },
          {
            id: "prod-002",
            quantity: 2,
          },
          {
            id: "prod-003",
            quantity: 1,
          },
        ],
      },
      {
        id: "li-002",
        name: "LineItem2 Box",
        products: [
          {
            id: "prod-002",
            quantity: 1,
          },
          {
            id: "prod-003",
            quantity: 5,
          },
          {
            id: "prod-00x",
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    id: "ord-0002",
    total: 800,
    date: "2024-09-02",
    shippingAddress: "2000 Dundas Street East",
    customerName: "John S02",
    customerEmail: "john.s02@gmail.com",
    lineItems: [
      {
        id: "li-001",
        name: "LineItem02 Box",
        products: [
          {
            id: "prod-001",
            quantity: 1,
          },
          {
            id: "prod-002",
            quantity: 2,
          },
          {
            id: "prod-003",
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    id: "ord-003",
    total: 1400,
    date: "2024-09-03",
    shippingAddress: "300 Dundas Street East",
    customerName: "John S3",
    customerEmail: "john.s3@gmail.com",
    lineItems: [
      {
        id: "li-003",
        name: "LineItem3 Box",
        products: [
          {
            id: "prod-001",
            quantity: 4,
          },
          {
            id: "prod-002",
            quantity: 1,
          },
          {
            id: "prod-004",
            quantity: 2,
          },
        ],
      },
    ],
  },
  {
    id: "ord-004",
    total: 1200,
    date: "2024-09-04",
    shippingAddress: "400 Dundas Street East",
    customerName: "John S4",
    customerEmail: "john.s4@gmail.com",
    lineItems: [
      {
        id: "li-004",
        name: "LineItem4 Box",
        products: [
          {
            id: "prod-001",
            quantity: 1,
          },
          {
            id: "prod-002",
            quantity: 1,
          },
          {
            id: "prod-004",
            quantity: 1,
          },
          {
            id: "prod-005",
            quantity: 1,
          },
        ],
      },
    ],
  },
];

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Product 1",
    price: 100,
  },
  {
    id: "prod-002",
    name: "Product 2",
    price: 200,
  },
  {
    id: "prod-003",
    name: "Product 3",
    price: 300,
  },
  {
    id: "prod-004",
    name: "Product 4",
    price: 400,
  },
  {
    id: "prod-005",
    name: "Product 5",
    price: 500,
  },
];
