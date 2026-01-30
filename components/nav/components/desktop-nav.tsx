import { NavLogo, NavItem } from "./";
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
      <ul className="text-2xl font-medium flex flex-col">
        {navItemConfigs.map((item, index) => {
          const isActive = activeSection
            ? activeSection === item.sectionId
            : false;
          return (
            <NavItem
              key={index}
              href={item.href}
              target={item.isExternal ? "_target" : undefined}
              isActive={isActive}
            >
              {item.text}
            </NavItem>
          );
        })}
      </ul>
    </div>
  );
}
