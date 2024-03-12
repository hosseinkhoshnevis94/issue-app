"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { IoLogIn } from "react-icons/io5";
import { FaHome, FaBoxTissue } from "react-icons/fa";

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
    <nav className="navbar bg-violet-600">
      <Logo />
      <div className="flex-1">
        {links.map((link) => (
          <Link
            href={link.href}
            className={`btn btn-ghost text-l mx-1 text-zinc-100 hover:bg-pink-400 ${
              currentPath == link.href && " text-pink-400 bg-pink-400"
            }`}
          >
            {link.logo}
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex-none">
        <Link
          href={"/login"}
          className={`btn btn-ghost text-l mx-1 bg-zinc-100 hover:bg-zinc-300 ${
            currentPath == "/login" && " bg-pink-100 text-pink-500"
          }`}
        >
          <IoLogIn />
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
