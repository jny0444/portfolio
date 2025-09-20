"use client";

import { ReactNode, LiHTMLAttributes } from "react";
import { usePathname } from "next/navigation";

interface ListComponentProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  href?: string;
}

export default function ListComponent({
  children,
  href,
  ...props
}: ListComponentProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={`hover:underline cursor-pointer ${
        isActive ? "underline" : ""
      }`}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </li>
  );
}
