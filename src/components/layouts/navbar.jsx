"use client";
import { navLinks } from "@/data/nav.links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="mb-20">
      <nav
        className={cn(
          "py-4 bg-background/60 backdrop-blur transform transition-transform duration-700 ease-in-out fixed top-0 left-0 right-0 z-50 shadow-md"
        )}
      >
        <div className="container_fluid flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="logo"
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={48}
                height={48}
              />
            </Link>
          </div>
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8 uppercase">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "nav_links",
                  pathname === href ? "text-primary" : "text-foreground"
                )}
              >
                <span className="link_label_wrapper">
                  <span className="link_label">{label}</span>
                  <span className="link_label">{label}</span>
                </span>
              </Link>
            ))}
          </ul>

          {/* mobile sidebar */}
          <div className="lg:hidden">
            <Sidebar pathname={pathname} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
