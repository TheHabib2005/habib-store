import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export const middleware = async (request: NextRequest) => {
  const path = request.nextUrl.pathname;

  const token = request.cookies.get("token")?.value || "";

  // if (token) {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
  // }

  // if (!token) {
  //   // console.log(request.nextUrl);
  //   console.log(NextResponse.redirect(new URL("/signup", request.nextUrl)));

  // return NextResponse.redirect(new URL("/signup", request.nextUrl));
  // }
  // return NextResponse.redirect("http://localhost:3000/signup");
};

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
