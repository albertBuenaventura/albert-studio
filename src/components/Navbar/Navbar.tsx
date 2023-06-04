import React, { useCallback, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavItemProps } from "./NavItem";
import { CollapsibleNavbar } from "./CollapsibleNavbar";

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

  return (
    <div className="sticky z-[9999] top-0" ref={ref}>
      <div
        className={cx(
          "w-full flex bg-slate-900 h-[70px] drop-shadow-lg justify-end",
          className
        )}
      >
        <div className="flex mr-8">
          <div className="hidden lg:flex space-x-9">{children}</div>
          <FontAwesomeIcon
            className="lg:hidden h-11 mr-8 self-center text-sky-700 hover:text-sky-700/70 cursor-pointer"
            icon={!showSidebar ? faBars : faXmark}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
        <div className="absolute bottom-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      </div>
      {showSidebar && <CollapsibleNavbar>{children}</CollapsibleNavbar>}
    </div>
  );
}
