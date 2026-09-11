import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { localeFromAcceptLanguage } from "@/lib/locales";

export default async function RootPage() {
  const headerList = await headers();
  const locale = localeFromAcceptLanguage(headerList.get("accept-language"));
  redirect(`/${locale}`);
}
