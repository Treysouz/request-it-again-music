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
}
