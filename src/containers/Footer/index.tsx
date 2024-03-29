import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavItems } from "../Navbar/NavItems";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div id="footer" className="mt-6 py-10 space-y-4">
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
            <FontAwesomeIcon icon={faGithub} className="w-full h-full" />
          </Link>
          <Link
            className="w-7 h-7 hover:text-orange-600 dark:hover:text-orange-400"
            href={"https://www.linkedin.com/in/albert-buenaventura-0b889086/"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-full h-full" />
          </Link>
          <Link
            className="w-7 h-7 hover:text-orange-600 dark:hover:text-orange-400"
            href={"mailto:albert@albertstudios.dev"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-full h-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}
