import { ReactNode } from "react";

interface LinkToProps {
  href: string;
  underline?: "underline" | string;
  children: ReactNode;
}

export default function LinkTo({ href, underline, children }: LinkToProps) {
  return (
    <a
      href={href}
      className={underline === "underline" ? "text-sm" : "underline text-sm"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
