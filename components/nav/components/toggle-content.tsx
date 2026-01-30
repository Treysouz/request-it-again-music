import { Icon } from "@/components";

interface Props {
  /** Whether drawer is open */
  open?: boolean;
}

export default function DrawerToggle({ open }: Props) {
  return (
    <div
      className={`btn p-2 text-white hover:text-white btn-secondary ${open ? "opacity-50" : ""}`}
    >
      <Icon svg="bars-3" className="size-6 sm:size-8" />
    </div>
  );
}
