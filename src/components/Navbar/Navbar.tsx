import React, { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavItemProps } from "./NavItem";
import { CollapsibleNavbar } from "./CollapsibleNavbar";
import { useDetectOutsideClick } from "../../hooks/use-detect-outside-click-hook";

export type NavbarProps = {
  className?: string;
  logoClassName?: string;
  children?:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[];
};

export function Navbar({ children, className = "" }: NavbarProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  const hideSidebar = useCallback(() => setShowSidebar(false), []);

  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", hideSidebar);

    return () => window.removeEventListener("resize", hideSidebar);
  }, []);

  useDetectOutsideClick(
    {
      containerRef: ref,
      onDetect: () => {
        hideSidebar();
      },
    },
    [ref]
  );

  return (
    <div className="sticky z-[9999] top-0" ref={ref}>
      <div
        className={cx(
          "w-full flex bg-white dark:bg-slate-900 h-[70px] justify-end sm:justify-start",
          className
        )}
      >
        <div className="flex mr-8 w-full justify-end">
          <div className="hidden w-full sm:flex space-x-9 items-center">
            {children}
          </div>
          <FontAwesomeIcon
            className="sm:hidden h-11 self-center text-maroon dark:text-white cursor-pointer"
            icon={!showSidebar ? faBars : faXmark}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      </div>
      {showSidebar && <CollapsibleNavbar>{children}</CollapsibleNavbar>}
    </div>
  );
}
