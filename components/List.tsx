import { ReactNode, LiHTMLAttributes } from "react";

interface ListComponentProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  href?: string;
}

export default function ListComponent({
  children,
  href,
  ...props
}: ListComponentProps) {
  return (
    <li className="hover:underline cursor-pointer" {...props}>
      {href ? <a href={href}>{children}</a> : children}
    </li>
  );
}
