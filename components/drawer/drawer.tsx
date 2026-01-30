"use client";

import { ReactNode, useState, useImperativeHandle, type Ref } from "react";

interface DrawerProps {
  /** Component to render as toggle button */
  toggle: ReactNode;
  /** Component's child components */
  children?: ReactNode;
  /** Side of screen to render drawer */
  side?: "l" | "r";
  /** Reference to drawer component */
  ref?: Ref<DrawerRef>;
}

export interface DrawerRef {
  toggleDrawer: () => unknown;
}

export default function Drawer({
  children,
  toggle,
  side = "l",
  ref,
}: DrawerProps) {
  const [open, setOpen] = useState(false);

  /**Toggles drawer */
  const toggleDrawer = () => {
    console.log("toggling");
    setOpen((prev) => !prev);
  };

  useImperativeHandle(ref, () => ({
    toggleDrawer,
  }));

  return (
    <>
      <button onClick={toggleDrawer}>{toggle}</button>
      <dialog
        className={`drawer z-100 absolute ${side === "l" ? "" : "drawer-end"}`}
      >
        <input
          id="drawer-toggle"
          type="checkbox"
          aria-label="Drawer Overlay"
          className="drawer-toggle"
          checked={open}
          onChange={toggleDrawer}
        />

        <div className="drawer-side">
          <label
            htmlFor="drawer-toggle"
            aria-label="Close Drawer"
            className="drawer-overlay backdrop-blur-lg"
          ></label>
          <div className="menu h-full p-0">{children}</div>
        </div>
      </dialog>
    </>
  );
}
