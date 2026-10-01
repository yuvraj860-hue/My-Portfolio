"use client";

import Link from "next/link";
import { Download, FileText, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { ResumeModal } from "@/components/resume-modal";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 font-mono text-sm font-bold tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full overflow-hidden border border-primary/40 bg-gradient-to-tr from-primary to-accent text-white shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover object-[center_12%]"
            />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </div>
          <span className="hidden sm:inline font-sans text-base font-extrabold tracking-tight">
            {profile.name}
          </span>
        </Link>

        {/* Primary Navigation */}
        <nav
          className="hidden items-center gap-1 lg:gap-1.5 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          {/* Resume Button in Navbar */}
          <ResumeModal>
            <Button
              size="sm"
              variant="outline"
              className="hidden sm:inline-flex h-9 gap-1.5 border-primary/30 bg-primary/5 hover:bg-primary/10 text-xs font-semibold text-primary"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </Button>
          </ResumeModal>

          <Button asChild size="sm" className="hidden md:inline-flex h-9 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-sm">
            <a href="#contact">Hire Me</a>
          </Button>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden border-t bg-background/95 backdrop-blur-2xl transition-all duration-300",
          open ? "max-h-96 py-4" : "max-h-0 py-0 border-t-0"
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3 pt-3 border-t border-border/80 flex flex-col gap-2">
            <a
              href={profile.links.phoneUrl}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 py-2 text-xs font-bold text-emerald-600 dark:text-emerald-400"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Me ({profile.phone})
            </a>
            <a
              href={profile.resume.url}
              download={profile.resume.filename}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/5 py-2 text-xs font-bold text-primary"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume ({profile.resume.filename})
            </a>
            <Button asChild size="sm" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Hire Me
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}