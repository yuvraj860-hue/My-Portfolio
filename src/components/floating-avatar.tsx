"use client";

import { ArrowUp, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function FloatingAvatar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Shows when user scrolls down past hero to view the rest of the portfolio
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed top-20 right-4 sm:right-8 z-40 transition-all duration-500 ease-out pointer-events-none",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-2.5 rounded-full border border-primary/40 bg-card/85 p-1.5 pr-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:scale-105">
        {/* Clickable Avatar to scroll back up */}
        <button
          onClick={scrollToTop}
          className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-primary/50 shadow-md group cursor-pointer"
          title="Scroll back to top"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-115"
          />
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
        </button>

        {/* User Info */}
        <div className="cursor-pointer text-left" onClick={scrollToTop}>
          <div className="flex items-center gap-1.5">
            <p className="font-sans text-xs font-bold leading-tight text-foreground">
              {profile.name}
            </p>
            <Sparkles className="h-3 w-3 text-primary animate-pulse" />
          </div>
          <p className="text-[10px] font-mono text-muted-foreground leading-tight">
            AI/ML Engineer
          </p>
        </div>

        {/* Up arrow quick action */}
        <button
          onClick={scrollToTop}
          className="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Back to top"
        >
          <ArrowUp className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
