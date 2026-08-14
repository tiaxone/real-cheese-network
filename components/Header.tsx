"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <div className="idbar">
        <div className="idbar-left">
          <div className="idbar-logo">
            <Image src="/logo.jpg" alt="Real Cheese Network" width={42} height={42} priority />
          </div>
          <div>
            <div className="idbar-title">Real Cheese Network</div>
            <div className="idbar-tag">Real cheese is the best cheese</div>
          </div>
          <nav className="idbar-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="live-pill">
            <span className="live-dot" />
            Live
          </div>
          <span className="menu-icon" aria-hidden="true">
            &#9776;
          </span>
        </div>
      </div>

      <nav className="navscroll" aria-label="Section navigation">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`navpill ${pathname === item.href ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
