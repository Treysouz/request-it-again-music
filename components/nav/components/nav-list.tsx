import { NavItem } from "./";
import { Dropdown, Icon } from "@/components";
import { NavItemConfig, VariantNavProps } from "../nav.types";

interface NavListProps extends VariantNavProps {
  /** Handler for nav item clicks */
  mobileView?: boolean;
}

function DropdownToggle({
  isActive,
}: {
  navItemConfig: NavItemConfig;
  isActive?: boolean;
}) {
  return (
    <div
      className={`h-full pr-4 flex items-center ${isActive ? "bg-secondary text-white" : ""} `}
    >
      <Icon svg="chevron-right" className="size-6"></Icon>
    </div>
  );
}

function DropdownMenu({
  navItemConfig,
  activeSection,
}: {
  navItemConfig: NavItemConfig;
  activeSection?: string;
}) {
  return (
    <div className="flex absolute shadow-md flex-col bg-white whitespace-nowrap w-36 sm:w-50 text-black">
      <NavList
        navItemConfigs={navItemConfig.nestedLinks || []}
        activeSection={activeSection}
      ></NavList>
    </div>
  );
}

export default function NavList({
  navItemConfigs,
  activeSection,
}: NavListProps) {
  /**
   * Determines if nav item is active
   *  @param {NavItemConfig} navItemConfig  - Nav item config to check
   *  @return {boolean} - Whether nav item is active
   * */
  const getIsActive = (navItemConfig: NavItemConfig): boolean => {
    if (activeSection) {
      return (
        activeSection === navItemConfig.sectionId ||
        !!navItemConfig?.nestedLinks?.find(
          (nestedItemConfig) => nestedItemConfig.sectionId === activeSection
        )
      );
    } else {
      return false;
    }
  };

  return (
    <ul className="text-2xl font-medium flex flex-col">
      {navItemConfigs.map((item, index) => {
        const isActive = getIsActive(item);
        return (
          <div
            className="flex flex-row justify-between w-full h-full"
            key={index + item.text}
          >
            <NavItem
              href={item.href}
              target={item.isExternal ? "_target" : undefined}
              isActive={isActive}
              className="h-12 flex-1 sm:text-lg"
            >
              {item.text}
            </NavItem>
            {item?.nestedLinks?.length && (
              <Dropdown
                toggle={
                  <DropdownToggle navItemConfig={item} isActive={isActive} />
                }
                className="flex flex-row "
                menu={
                  <DropdownMenu
                    navItemConfig={item}
                    activeSection={activeSection}
                  />
                }
                label="Nav List"
              ></Dropdown>
            )}
          </div>
        );
      })}
    </ul>
  );
}
