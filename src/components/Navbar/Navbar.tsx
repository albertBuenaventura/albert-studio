import React, { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavItemProps } from "./NavItem";
import { CollapsibleNavbar } from "./CollapsibleNavbar";
import { useDetectOutsideClick } from "../../hooks/use-detect-outside-click-hook";

export type NavbarProps = {
  className?: string;
  collapsible?: boolean;
  logoClassName?: string;
  children?:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[];
};

export function Navbar({
  children,
  className = "",
  collapsible = false,
}: NavbarProps) {
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
          "w-full flex dark:bg-slate-900 py-6 px-4 justify-end sm:justify-start",
          className
        )}
      >
        <div className="flex w-full justify-end">
          <div className="w-full sm:flex space-x-9 items-center">
            {children}
          </div>
          {collapsible && (
            <FontAwesomeIcon
              className="sm:hidden h-11 self-center text-orange-600 dark:text-orange-400 cursor-pointer"
              icon={!showSidebar ? faBars : faXmark}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          )}
        </div>
      </div>
      {showSidebar && collapsible && (
        <CollapsibleNavbar>{children}</CollapsibleNavbar>
      )}
    </div>
  );
}
