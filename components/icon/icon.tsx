import { SVGS } from "@/components";

interface IconProps {
  /** The name of the SVG icon to display (must be a valid key from svgs.ts) */
  svg: keyof typeof SVGS;
  /** Additional CSS classes to apply to the component */
  className?: string;
}

/** Component for displaying SVG icons with type safety. */
export default function Icon({ svg, className }: IconProps) {
  return <span className={`inline-block ${className || ""}`}>{SVGS[svg]}</span>;
}
