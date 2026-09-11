import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl text-bone">404</h1>
      <Link
        href="/"
        className="font-headline mt-8 text-xs text-ember underline-offset-4 hover:underline"
      >
        THE FUEL
      </Link>
    </section>
  );
}
