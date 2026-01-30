import { NavLogo, NavList } from "./";

import type { VariantNavProps } from "../nav.types";

export default function DesktopNav({
  navItemConfigs,
  activeSection,
}: VariantNavProps) {
  return (
    <div className="flex-col h-full bg-white shadow-lg hidden lg:flex">
      <div className="p-8">
        <NavLogo></NavLogo>
      </div>
      <NavList
        navItemConfigs={navItemConfigs}
        activeSection={activeSection}
      ></NavList>
    </div>
  );
}
