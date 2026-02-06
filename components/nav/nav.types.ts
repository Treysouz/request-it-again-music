/** Details for a nav item */
export interface NavItemConfig {
  /**Text to render */
  text: string;
  /**HREF associated with nav item */
  href: string;
  /**ID of section associated with nav item */
  sectionId?: string;
  /**Whether it's an external link */
  isExternal?: boolean;
  /**Nested links */
  nestedLinks?: NavItemConfig[];
}

/** Desktop and mobile nav props */
export interface VariantNavProps {
  /** Details for the nav items */
  navItemConfigs: NavItemConfig[];
  /** The section of the page currently in view. */
  activeSection?: string;
}
