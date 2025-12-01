"use client"

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathName= usePathname();

  const isActive= (path:string) =>
    pathName===path;

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">{/*flex-col on small, flex-row on sm+*/}
      {NAV_ITEMS.map(({label, href}) => (
        <li key={href} className="list-none">
          <Link href={href} className={`hover:text-yellow-50 transition-colors ${isActive(href) ? "text-yellow-50" : ""}`}>{/*normally grey color*/}
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavItems