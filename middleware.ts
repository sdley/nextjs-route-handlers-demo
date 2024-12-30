import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // 1st approach
    // return NextResponse.redirect(new URL("/", request.url))

    // // 2nd approach
    // if (request.nextUrl.pathname === "/profile"){
    //     // return NextResponse.redirect(new URL("/hello", request.url));

    //     // We can also choose to rewrite the url
    //     return NextResponse.rewrite(new URL("/hello", request.url));
    // }

    // working with cookies & headers in middleware
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme", "dark");
    }

    // working with headers
    response.headers.set("custom-header", "custom-value");

    return response;
}

// 1st approach
// export const config = {
//     matcher: "/profile"
// }