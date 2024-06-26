import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request }) as { role: string }
    if (!(token?.role.includes('admin')) || !token) {
        return NextResponse.redirect(new URL('/not-found', request.url))
    }
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/api/admin/:path*'
    ]
}