// export { default } from "next-auth/middleware"

// export const config = { matcher: ["/dashboard", "/dashboard/:path*"] }


import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        
        if (req.nextUrl.pathname.startsWith('/dashboard')) {
          return !!token
        }
        return true
      },
    },
    pages: {
      signIn: '/login',
    },
  }
)

export const config = { 
  matcher: [
    "/dashboard",
    "/dashboard/:path*"
  ] 
}