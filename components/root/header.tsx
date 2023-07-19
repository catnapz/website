"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about-us" },
];

const active =
  "bg-primary-container dark:bg-primary-container-dark text-on-primary-container dark:text-on-primary-container-dark";
const inactive =
  "text-on-surface dark:text-on-surface-dark hover:bg-secondary-container hover:dark:bg-secondary-container-dark hover:text-on-secondary-container hover:dark:text-on-secondary-container-dark";

export const Header = () => {
  const path = usePathname();
  return (
    <nav className="bg-surface dark:bg-surface-dark border-b border-surface-variant dark:border-surface-variant-dark">
      <div className="container py-2 px-6 md:px-4 flex items-center mx-auto space-x-4">
        {navigation.map((item) => (
          <Link
            href={item.href}
            className={`${path === item.href ? active : inactive}
                  px-3 py-2 rounded-md text-sm font-medium last-of-type:flex-1`}
            aria-current={path === item.href ? "page" : undefined}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src="/logo.png"
            alt="Organization Logo"
            height={30}
            width={30}
            priority
          />
          <h1 className="text-primary dark:text-primary-dark">catnapz</h1>
        </div>
      </div>
    </nav>
  );
};
