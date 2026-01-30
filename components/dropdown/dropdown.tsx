"use client";

import { ReactNode, useRef, useEffect, useState, useCallback } from "react";
import type { RefObject, ToggleEventHandler } from "react";

interface DropdownProps {
  /** Label for dropdown*/
  label: string;
  /** Content to render as the toggle for the menu */
  toggle: ReactNode;
  /** Content to render as the menu */
  menu: ReactNode;
  /** Additional CSS classes to apply to the component */
  className?: string;
  /** Additional CSS classes to apply to toggle*/
  toggleClass?: string;
  /** Whether the dropdown is open. */
  open?: boolean;
  /** Handlers for when key is pressed*/
  onToggle?: ToggleEventHandler<HTMLElement>;
  /** Whether to open dropdown on hover */
  toggleOnHover?: boolean;
}

/** Dropdown component */
export default function Dropdown({
  label,
  toggle,
  menu,
  className,
  toggleClass,
  open = false,
  onToggle,
  toggleOnHover,
}: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(open);
  /** Reference to details element. */
  const detailsRef: RefObject<HTMLDetailsElement | null> = useRef(null);

  /** Accessibility label for toggle button */
  const toggleLabel: string = `Toggle${label ? ` ${label} ` : " "}Menu`;

  /**
   * Toggle event handler.
   *
   *  @param {ToggleEvent} event  - Toggle event that occurs when dropdown is toggled
   */
  const handleToggle: ToggleEventHandler<HTMLDetailsElement> = (event) => {
    setDropdownOpen(event.currentTarget.open);
    onToggle?.(event);
  };

  /**
   * Click event handler that closes the navigation menu if a click occurs outside of the component.
   *
   *  @param {MouseEvent} event  - Mouse event that occurs when a click occurs.
   */
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownOpen &&
        detailsRef?.current &&
        event.target instanceof Node &&
        !detailsRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    },
    [dropdownOpen, detailsRef]
  );

  /** Opens dropdown if toggleOnHover is true */
  const handleMouseOver = () => {
    if (toggleOnHover) {
      setDropdownOpen(true);
    }
  };

  /** closes dropdown if toggleOnHover is true */
  const handleMouseLeave = () => {
    if (toggleOnHover) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add click event listener for click handler.
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Stop listening to click event when component unmounts.
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setDropdownOpen(open);
  }, [open]);

  return (
    <details
      data-testid="dropdown"
      ref={detailsRef}
      className={`cursor-pointer ${className || ""}`}
      open={dropdownOpen}
      onToggle={handleToggle}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <summary
        aria-expanded={dropdownOpen}
        aria-label={toggleLabel}
        title={toggleLabel}
        className={`h-full w-full list-none ${toggleClass}`}
      >
        {toggle}
      </summary>
      {menu}
    </details>
  );
}
