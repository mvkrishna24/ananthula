import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-rice px-5 text-center">
      <p className="eyebrow text-zari">A loose thread</p>
      <h1 className="font-display mt-5 text-[clamp(2.4rem,6vw,5rem)]">
        This page isn&rsquo;t part of the weave.
      </h1>
      <p className="mt-4 max-w-[30em] text-muted">
        The thread you followed doesn&rsquo;t lead anywhere — but the
        collections do.
      </p>
      <Link href="/" className="btn-editorial btn-editorial--solid mt-10">
        Return Home
      </Link>
    </section>
  );
}
