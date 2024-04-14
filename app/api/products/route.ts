import conncetToDb from "@/helpers/db/config/conncetToDB";
import Product from "@/helpers/db/schema/ProductSchema";
import { NextRequest, NextResponse } from "next/server";

conncetToDb();
export const POST = async (request: NextRequest) => {
  try {
    const { query, sort } = await request.json();

    const products = await Product.find(query).sort(sort);
    const apiResponse = {
      success: true,
      data: products,
    };
    return NextResponse.json(apiResponse);
  } catch (error) {
    const apiResponse = {
      error: true,
      message: error,
    };
    return NextResponse.json(apiResponse);
  }
};
