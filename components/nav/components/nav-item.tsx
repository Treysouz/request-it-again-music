import Link, { LinkProps } from "next/link";
import type { ReactNode, HTMLAttributeAnchorTarget } from "react";

interface NavItemProps extends LinkProps {
  /** Content to render inside the link */
  children?: ReactNode;
  /** Whether this nav item is currently active */
  isActive?: boolean;
  /** Additional CSS classes to apply to the component */
  className?: string;
  /** Where to display the linked URL */
  target?: HTMLAttributeAnchorTarget;
}

export default function NavItem({
  children,
  isActive,
  className,
  ...props
}: NavItemProps) {
  return (
    <Link
      {...props}
      className={`btn btn-ghost rounded-none flex justify-start hover:bg-secondary hover:text-white py-6 text-xl border-x-0 ${isActive ? "border-primary" : ""} ${className || ""} `}
    >
      {children}
    </Link>
  );
}
