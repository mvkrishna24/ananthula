import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
  rule = true,
}: {
  children: ReactNode;
  className?: string;
  rule?: boolean;
}) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${className}`}>
      {rule && (
        <span
          aria-hidden
          data-reveal="line"
          className="inline-block h-px w-10 bg-current opacity-60"
        />
      )}
      <span data-reveal>{children}</span>
    </p>
  );
}
