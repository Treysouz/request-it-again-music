"use client";

import { DesktopNav } from "./components";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import type { NavItemConfig } from "./nav.types";

export default function Nav() {
  /** Current path name */
  const pathname = usePathname();

  /** The section of the page currently in view. */
  const [activeSection, setActiveSection] = useState("");

  const NAV_ITEMS: NavItemConfig[] = [
    {
      text: "Home",
      href: "/",
      sectionId: "home",
    },
    {
      text: "Releases",
      href: "/#releases",
      sectionId: "releases",
    },
    {
      text: "Roster",
      href: "/#roster",
      sectionId: "roster",
    },
    {
      text: "Live Stream",
      href: "https://www.twitch.tv/stephensouzamusic",
      isExternal: true,
    },
    {
      text: "Events",
      href: "/#events",
      sectionId: "events",
    },
    {
      text: "Merch",
      href: "/#merch",
      isExternal: true,
    },
    {
      text: "Contact",
      href: "/#contact",
      sectionId: "contact",
    },
  ];

  /**
   * Initiates an IntersectionObserver to track which sections are currently in view.
   * @returns {observer: IntersectionObserver, pageSections: NodeListOf<Element>} An object containing the observer instance and the sections being observed
   */
  const initiateObserver = (): {
    observer: IntersectionObserver;
    pageSections: NodeListOf<Element>;
  } => {
    // Query sections for the current page
    const pageSections = document.querySelectorAll("section[id]");

    // Options for observer
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-50px 0px 50px 0px",
    };

    // Setup observer for current sections.
    const observer = new IntersectionObserver((elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          // Update actionSection with section in view
          setActiveSection(element.target.id);
        }
      });
    }, observerOptions);

    // Observe each section to check when it is in view
    pageSections.forEach((section) => observer.observe(section));

    return { observer, pageSections };
  };

  /**On mount, initiate observer to get the current section in view */
  useEffect(() => {
    const { observer, pageSections } = initiateObserver();
    // Stop observing old sections
    return () => {
      pageSections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <DesktopNav
      navItemConfigs={NAV_ITEMS}
      activeSection={activeSection}
    ></DesktopNav>
  );
}
