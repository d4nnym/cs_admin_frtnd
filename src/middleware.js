import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  
    const token = req.cookies.get("jwt");
    console.log(token);
  
    try {
      await jwtVerify(token.value, new TextEncoder().encode("secret"));

      
      if (req.url !== "http://localhost:3000/home") {
        return NextResponse.redirect(new URL("/home", req.url));
      }

    } catch (err) {
      if(req.url !== "http://localhost:3000/login")
        return NextResponse.redirect(new URL("/login", req.url));
      /*if (req.url !== "http://localhost:5000/login")
        return NextResponse.redirect(new URL("/login", req.url));*/
    }
  
    return NextResponse.next();
    
  }

  export const config = {
    matcher: ["/home/:path*","/profile/:path*","/login","/dates"],
  }