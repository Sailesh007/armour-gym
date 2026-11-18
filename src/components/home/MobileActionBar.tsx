"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone } from "lucide-react";

/**
 * Phone-only bar with the three things a visitor most often wants to do.
 * It appears after the hero so it never covers the first screen.
 */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 560);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.4fr] border-t border-white/15 bg-[#0a0a0a]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="tel:+918160697163"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-14 items-center justify-center gap-2 font-body text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call
      </a>
      <a
        href="https://wa.me/918160697163"
        target="_blank"
        rel="noreferrer"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-14 items-center justify-center gap-2 border-l border-white/15 font-body text-sm font-semibold text-white"
      >
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
      <Link
        href="/contact?plan=demo"
        tabIndex={visible ? 0 : -1}
        className="flex min-h-14 items-center justify-center bg-[#C8010A] font-body text-sm font-semibold text-white"
      >
        Book a demo
      </Link>
    </div>
  );
}
