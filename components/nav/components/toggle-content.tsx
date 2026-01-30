import { Icon } from "@/components";

interface Props {
  /** Whether drawer is open */
  open?: boolean;
}

export default function DrawerToggle({ open }: Props) {
  return (
    <div
      className={`btn btn-primary text-secondary p-2 h-min w-min hover:bg-secondary hover:text-white ${open ? "bg-primary" : "bg-transparent border-none"}`}
    >
      <Icon svg="bars-3" className="size-6 sm:size-8" />
    </div>
  );
}
