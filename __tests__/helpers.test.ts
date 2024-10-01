import { describe, expect, test } from "@jest/globals";
import {
  computeTotalOrderProducts,
  getOrderProductsByDate,
  getOrdersByDate,
} from "@/lib/helpers";

describe("getOrdersByDate", () => {
  test("returns the correct orders if the orders can be found by date", () => {
    expect(getOrdersByDate("2024-09-02")).toEqual([
      {
        id: "ord-002",
        total: 2000,
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
                product: {
                  id: "prod-001",
                  name: "Product 1",
                  price: 100,
                },
                quantity: 1,
                id: "prod-001",
              },
              {
                product: {
                  id: "prod-002",
                  name: "Product 2",
                  price: 200,
                },
                quantity: 2,
                id: "prod-002",
              },
              {
                product: {
                  id: "prod-003",
                  name: "Product 3",
                  price: 300,
                },
                quantity: 1,
                id: "prod-003",
              },
            ],
          },
          {
            id: "li-002",
            name: "LineItem2 Box",
            products: [
              {
                product: {
                  id: "prod-002",
                  name: "Product 2",
                  price: 200,
                },
                quantity: 1,
                id: "prod-002",
              },
              {
                product: {
                  id: "prod-003",
                  name: "Product 3",
                  price: 300,
                },
                quantity: 5,
                id: "prod-003",
              },
              {
                quantity: 1,
                id: "prod-00x",
              },
            ],
          },
        ],
      },
      {
        id: "ord-0002",
        total: 20000,
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
                product: {
                  id: "prod-001",
                  name: "Product 1",
                  price: 100,
                },
                quantity: 1,
                id: "prod-001",
              },
              {
                product: {
                  id: "prod-002",
                  name: "Product 2",
                  price: 200,
                },
                quantity: 2,
                id: "prod-002",
              },
              {
                product: {
                  id: "prod-003",
                  name: "Product 3",
                  price: 300,
                },
                quantity: 1,
                id: "prod-003",
              },
            ],
          },
        ],
      },
    ]);
  });
  test("returns empty orders if the orders cannot be found by date", () => {
    expect(getOrdersByDate("2024-09-06")).toEqual([]);
  });
});

describe("getOrderProductsByDate", () => {
  test("returns list of products from all orders of a given date", () => {
    expect(getOrderProductsByDate("2024-09-02")).toEqual([
      {
        product: {
          id: "prod-001",
          name: "Product 1",
          price: 100,
        },
        quantity: 1,
        id: "prod-001",
      },
      {
        product: {
          id: "prod-002",
          name: "Product 2",
          price: 200,
        },
        quantity: 2,
        id: "prod-002",
      },
      {
        product: {
          id: "prod-003",
          name: "Product 3",
          price: 300,
        },
        quantity: 1,
        id: "prod-003",
      },
      {
        product: {
          id: "prod-002",
          name: "Product 2",
          price: 200,
        },
        quantity: 1,
        id: "prod-002",
      },
      {
        product: {
          id: "prod-003",
          name: "Product 3",
          price: 300,
        },
        quantity: 5,
        id: "prod-003",
      },
      {
        quantity: 1,
        id: "prod-00x",
      },
      {
        product: {
          id: "prod-001",
          name: "Product 1",
          price: 100,
        },
        quantity: 1,
        id: "prod-001",
      },
      {
        product: {
          id: "prod-002",
          name: "Product 2",
          price: 200,
        },
        quantity: 2,
        id: "prod-002",
      },
      {
        product: {
          id: "prod-003",
          name: "Product 3",
          price: 300,
        },
        quantity: 1,
        id: "prod-003",
      },
    ]);
  });
  test("returns empty products if the orders cannot be found by date", () => {
    expect(getOrderProductsByDate("2024-09-06")).toEqual([]);
  });
});

describe("computeTotalOrderProducts", () => {
  test("computes correctly the total products", () => {
    const orders = [
      {
        product: {
          id: "prod-001",
          name: "Product 1",
          price: 100,
        },
        quantity: 1,
        id: "prod-001",
      },
      {
        product: {
          id: "prod-002",
          name: "Product 2",
          price: 200,
        },
        quantity: 2,
        id: "prod-002",
      },
      {
        product: {
          id: "prod-003",
          name: "Product 3",
          price: 300,
        },
        quantity: 1,
        id: "prod-003",
      },
      {
        product: {
          id: "prod-002",
          name: "Product 2",
          price: 200,
        },
        quantity: 1,
        id: "prod-002",
      },
      {
        product: {
          id: "prod-003",
          name: "Product 3",
          price: 300,
        },
        quantity: 5,
        id: "prod-003",
      },
      {
        quantity: 1,
        id: "prod-00x",
      },
      {
        product: {
          id: "prod-001",
          name: "Product 1",
          price: 100,
        },
        quantity: 1,
        id: "prod-001",
      },
      {
        product: {
          id: "prod-002",
          name: "Product 2",
          price: 200,
        },
        quantity: 2,
        id: "prod-002",
      },
      {
        product: {
          id: "prod-003",
          name: "Product 3",
          price: 300,
        },
        quantity: 1,
        id: "prod-003",
      },
    ];

    expect(computeTotalOrderProducts(orders)).toEqual({
      "Product 1": 2,
      "Product 2": 5,
      "Product 3": 7,
      "prod-00x": 1,
    });
  });
  test("returns an empty object if given an empty list of products", () => {
    expect(computeTotalOrderProducts([])).toEqual({});
  });
});
