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
      className={`btn btn-ghost rounded-none flex justify-start hover:bg-secondary hover:text-white p-0 h-12 text-xl border-none  ${isActive ? "bg-secondary text-white" : ""} ${className || ""} `}
    >
      <div className="flex flex-row items-center h-full space-x-7 w-full">
        <div
          className={`h-full ${isActive ? "bg-primary" : "bg-transparent"} w-1`}
        />
        <div>{children}</div>
      </div>
    </Link>
  );
}
