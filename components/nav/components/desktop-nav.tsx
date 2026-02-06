import { NavLogo, NavList } from "./";

import type { VariantNavProps } from "../nav.types";

export default function DesktopNav({
  navItemConfigs,
  activeSection,
}: VariantNavProps) {
  return (
    <div className="flex-col h-full shadow-lg hidden lg:flex bg-secondary">
      <div className="p-8 bg-white">
        <NavLogo></NavLogo>
      </div>
      <div className="bg-white">
        <NavList
          navItemConfigs={navItemConfigs}
          activeSection={activeSection}
        ></NavList>
      </div>
    </div>
  );
}
