import conncetToDb from "@/helpers/db/config/conncetToDB";
import Product from "@/helpers/db/schema/ProductSchema";
import { NextRequest, NextResponse } from "next/server";

conncetToDb();
export const POST = async (request: NextRequest) => {
  try {
    const productId = await request.json();
    const product = await Product.find({ _id: productId });
    return NextResponse.json(product);
  } catch (error) {
    const apiResponse = {
      error: true,
      message: error,
    };
    return NextResponse.json(apiResponse);
  }
};
