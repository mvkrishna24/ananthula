import Link from "next/link";
import type { ReactNode } from "react";

export function EditorialLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden className="arrow">
        →
      </span>
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-underline ${className}`}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`link-underline ${className}`}>
      {inner}
    </Link>
  );
}
