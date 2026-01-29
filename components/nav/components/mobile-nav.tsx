import { ToggleContent, NavLogo } from "./";
import { Drawer } from "@/components";

export default function MobileNav() {
  return (
    <div className="w-full grid grid-cols-3 p-8">
      <div className="col-span-1">
        <Drawer toggle={<ToggleContent />}>
          <div className="bg-red-100 h-full w-60">
            <button>Test</button>
          </div>
        </Drawer>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <NavLogo></NavLogo>
      </div>
    </div>
  );
}
