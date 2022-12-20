import { NextResponse } from 'next/server';

export default function middleware(req) {
  let verify = req.cookies.get('id');
  let url = req.nextUrl.pathname;
  // url.startsWith('/about')

  if (verify && (url === '/dtp/login' || url === '/dtp/register')) {
    return NextResponse.redirect(new URL('/dtp', req.url));
  }

  if (
    !verify &&
    (url === '/dtp' ||
      url === '/dtp/perusahaan' ||
      url === '/dtp/profile' ||
      url === '/dtp/penjual' ||
      url === '/dtp/pembeli' ||
      url.startsWith('/dtp/artikel'))
  ) {
    return NextResponse.redirect(new URL('/dtp/login', req.url));
  }
}
