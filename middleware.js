import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  const isAuth = !!token
  const isLoginPage = request.nextUrl.pathname.startsWith('/login')

  // Si no está autenticado y no está en /login, redirigilo
  if (!isAuth && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Si está autenticado y trata de ir a /login, redirigilo al home
  if (isAuth && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
