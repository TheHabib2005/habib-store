import conncetToDb from "@/helpers/db/config/conncetToDB";
import User from "@/helpers/db/schema/User.schema";

import { NextRequest, NextResponse } from "next/server";
conncetToDb();
export const POST = async (request: NextRequest) => {
  try {
    let response: any = {
      success: false,
      message: "Something went wrong",
      data: null,
    };
    const { name, email, password, confirmPassword } = await request.json();

    if (!name || !email || !password || !confirmPassword) {
      response = {
        success: false,
        message: "All fields are required",
        data: null,
      };
      return NextResponse.json(response);
    } else if (password !== confirmPassword) {
      response = {
        success: false,
        message: "Passwords do not match",
        data: null,
      };
      return NextResponse.json(response);
    } else {
      const isUserExit = await User.findOne({ email: email });
      if (isUserExit) {
        response = {
          success: false,
          message: "User already exists",
          data: null,
        };
        return NextResponse.json(response);
      }

      let user = {
        username: name,
        email,
        password,
        confirmPassword,
        isUserVerifyed: true,
      };

      const saveduser = await User.create(user);

      response = {
        success: true,
        message: "User created successfully",
        data: saveduser,
      };

      return NextResponse.json(response);
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      error: error,
    });
  }
};
