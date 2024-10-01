import { getOrderProductsByDate } from "@/lib/helpers";
import { dateQuerySchema } from "@/lib/validation";
import { OrderProduct } from "@/types/order";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  request: Request
): Promise<NextResponse<OrderProduct[]>> {
  const { url } = request;
  const { searchParams } = new URL(url);
  const date = searchParams.get("date") || "";

  try {
    dateQuerySchema.parse({ date });
    const products = getOrderProductsByDate(date);

    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json([], {
        status: 400,
      });
    }
    return NextResponse.json([], { status: 500 });
  }
}
