import { ToggleContent, NavLogo, NavItem } from "./";
import { Drawer, type DrawerRef } from "@/components";
import { useRef } from "react";
import type { VariantNavProps } from "../nav.types";

export default function MobileNav({
  navItemConfigs,
  activeSection,
}: VariantNavProps) {
  const drawerRef = useRef<DrawerRef>(null);

  const toggleNavDrawer = () => {
    drawerRef.current?.toggleDrawer();
  };

  return (
    <div className="w-full p-4 flex flex-row justify-between bg-white shadow-md flex-wrap">
      <NavLogo></NavLogo>
      <Drawer ref={drawerRef} toggle={<ToggleContent />} side="r">
        <div className="bg-white h-full py-8">
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
                  className="pr-16"
                  onClick={toggleNavDrawer}
                >
                  {item.text}
                </NavItem>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
