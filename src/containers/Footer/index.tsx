import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavItems } from "../Navbar/NavItems";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <div className="mt-6 py-10 space-y-4">
      <div className="flex flex-wrap gap-2 justify-between">
        <Logo className="flex" />
        <NavItems />
      </div>
      <div className="flex flex-col text-neutral-700 dark:text-white">
        <div>©2024 All Rights Reserved.</div>
        <div>Made with 🧡 by Albert Buenaventura</div>
        <div className="flex space-x-4 mt-2">
          <Link
            className="w-7 h-7 hover:text-orange-600 dark:hover:text-orange-400"
            href={"https://github.com/albertBuenaventura"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            className="w-7 h-7 hover:text-orange-600 dark:hover:text-orange-400"
            href={"https://www.linkedin.com/in/albert-buenaventura-0b889086/"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </div>
  );
}
