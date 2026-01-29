"use client";

import { ReactNode, useState } from "react";

interface DrawerProps {
  /** Component to render as toggle button */
  toggle: ReactNode;
  /** Component's child components */
  children?: ReactNode;
}

export default function Drawer({ children, toggle }: DrawerProps) {
  const [open, setOpen] = useState(false);

  /**Toggles drawer */
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleDrawer}>{toggle}</button>
      <dialog className="drawer z-100 absolute">
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
