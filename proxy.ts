import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale, localeFromAcceptLanguage } from "@/lib/locales";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (isLocale(segment)) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  const locale =
    cookie && isLocale(cookie)
      ? cookie
      : localeFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|.*\\..*).*)"],
};
