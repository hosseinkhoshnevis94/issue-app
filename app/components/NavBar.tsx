"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { FaHome, FaBoxTissue } from "react-icons/fa";
import AuthStatus from "./AuthStatus";
interface Link {
  label: string;
  href: string;
  logo: JSX.Element; // Use JSX.Element as the type for React components
}
const links: Link[] = [
  { label: "Home", href: "/", logo: <FaHome /> },
  { label: "issues", href: "/issues", logo: <FaBoxTissue /> },
];
const NavBar = () => {
  const currentPath = usePathname();


  return (
    <nav className="navbar bg-violet-600 pr-10">
      
      <ul className="flex-1">
        <li><Logo /></li>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`nav-link ${
                currentPath == link.href && " text-pink-400 bg-pink-400"
              }`}
            >
              {link.logo}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

   <AuthStatus currentPath={currentPath}/>
    </nav>
  );
};

export default NavBar;
