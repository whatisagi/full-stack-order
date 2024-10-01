"use client";

import { ProductTable } from "@/components/product-table";
import { SelectDate } from "@/components/select-date";
import { ORDER_API, PRODUCTS_API } from "@/lib/constants";
import { computeTotalOrderProducts } from "@/lib/helpers";
import { DetailedOrder, OrderProduct } from "@/types/order";
import { format } from "date-fns";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

// Not handling status code here
const fetcher = (url: string, { arg }: { arg: { date: string } }) => {
  const { date } = arg;
  const fullUrl = `${url}?${new URLSearchParams({
    date: date,
  }).toString()}`;
  return fetch(fullUrl).then((res) => res.json());
};

// See Defer loading data until needed on https://swr.vercel.app/docs/mutation
export default function Index() {
  const [ordersDate, setOrdersDate] = useState<Date | undefined>();
  const [productsDate, setProductsDate] = useState<Date | undefined>();

  const { data: orders, trigger: triggerOrders } = useSWRMutation<
    DetailedOrder[]
  >(ORDER_API, fetcher);
  const { data: products, trigger: triggerProducts } = useSWRMutation<
    OrderProduct[]
  >(PRODUCTS_API, fetcher);

  const orderProducts = computeTotalOrderProducts(products || []);

  const onSelectOrdersDate = (date?: Date) => {
    setOrdersDate(date);
    if (!!date) {
      // @ts-ignore
      triggerOrders({
        date: format(date, "yyyy-MM-dd"),
      });
    }
  };

  const onSelectProductsDate = (date?: Date) => {
    setProductsDate(date);
    if (!!date) {
      // @ts-ignore
      triggerProducts({
        date: format(date, "yyyy-MM-dd"),
      });
    }
  };

  return (
    <main className="flex flex-col max-md:space-y-10 md:flex-row p-4">
      <div className="flex flex-col space-y-4 md:w-1/2">
        <SelectDate
          title="Get orders for"
          date={ordersDate as Date}
          onSelectDate={onSelectOrdersDate}
        />
        {ordersDate && (
          <div>
            <ol className="list-decimal list-inside">
              {orders?.map((order) => (
                <li key={order.id}>
                  <span className="font-bold">{`Order #${order.id}`}</span>
                  <div className="ml-6">{`Order Date: ${order.date}`}</div>
                  <div className="ml-6">Line Items: </div>
                  <ol className="list-decimal list-inside">
                    {order.lineItems.map((li) => (
                      <li key={li.id} className="ml-10">
                        <span>{li.name}</span>
                        <ol className="list-decimal list-inside">
                          {li.products.map((p, index) => (
                            <li key={index} className="ml-12">
                              <span>{`${p.product?.name || p.id} x ${
                                p.quantity
                              }`}</span>
                            </li>
                          ))}
                        </ol>
                      </li>
                    ))}
                  </ol>
                  <div className="ml-6">Ships to: </div>
                  <ol className="list-decimal list-inside">
                    <li className="ml-12">{`Name: ${order.customerName}`}</li>
                    <li className="ml-12">{`Address: ${order.shippingAddress}`}</li>
                  </ol>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-4 md:w-1/2">
        <SelectDate
          title="Get products for"
          date={productsDate as Date}
          onSelectDate={onSelectProductsDate}
        />
        {!!productsDate && (
          <div>
            <ProductTable products={orderProducts} />
          </div>
        )}
      </div>
    </main>
  );
}
