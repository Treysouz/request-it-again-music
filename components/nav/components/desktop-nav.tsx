import { NavLogo, NavItem } from "./";
import { NavItemConfig } from "../nav.types";

interface DesktopNavProps {
  /** Details for the nav items */
  navItemConfigs: NavItemConfig[];
  /** The section of the page currently in view. */
  activeSection?: string;
}

export default function DesktopNav({
  navItemConfigs,
  activeSection,
}: DesktopNavProps) {
  return (
    <div className="flex flex-col  h-full bg-white shadow-md">
      <div className="p-4">
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
