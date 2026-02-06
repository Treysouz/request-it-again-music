import { NavLogo, NavList } from "./";
import { Drawer, type DrawerRef, Icon } from "@/components";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import type { VariantNavProps } from "../nav.types";

function DrawerToggle() {
  return (
    <div className="btn p-2 text-white hover:text-white btn-secondary">
      <Icon svg="bars-3" className="size-6 sm:size-8" />
    </div>
  );
}

export default function MobileNav({
  navItemConfigs,
  activeSection,
}: VariantNavProps) {
  const drawerRef = useRef<DrawerRef>(null);

  /** Current path name */
  const pathname = usePathname();

  useEffect(() => {
    drawerRef.current?.closeDrawer();
  }, [pathname, drawerRef]);

  return (
    <div className="w-full p-4 bg-white shadow-md lg:hidden grid-cols-2 md:grid-cols-3">
      <div className="col-span-1 flex items-center">
        <Drawer ref={drawerRef} toggle={<DrawerToggle />}>
          <div className="bg-white h-full py-8 w-36 sm:w-50">
            <NavList
              mobileView={true}
              navItemConfigs={navItemConfigs}
              activeSection={activeSection}
            ></NavList>
          </div>
        </Drawer>
      </div>
      <div className="cols-span-1 flex items-center justify-end md:justify-center">
        <NavLogo></NavLogo>
      </div>
    </div>
  );
}
