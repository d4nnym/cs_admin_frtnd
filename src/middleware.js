
export {default} from "next-auth/middleware" 
/*export async function middleware(req) {
  
    
}*/

  export const config = {
    matcher: ["/home/:path*","/profile/:path*","/patient","/personal"],
  }