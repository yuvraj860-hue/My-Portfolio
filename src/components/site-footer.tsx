import { Download, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { navLinks, profile } from "@/data/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-card/40 backdrop-blur-md" aria-label="Footer">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-bold text-primary-foreground">
                YS
              </span>
              <p className="font-mono text-sm font-bold text-foreground">{profile.name}</p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {profile.title} · {profile.location.current}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume.url}
                  download={profile.resume.filename}
                  className="flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:underline"
                >
                  <Download className="h-3.5 w-3.5" />
                  PDF Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4 text-[#0077b5]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Yuvraj"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
            </a>
            <a
              href={profile.links.phoneUrl}
              aria-label={`Call Yuvraj at ${profile.phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-background/80 text-muted-foreground transition-all hover:border-emerald-500/50 hover:text-emerald-500"
            >
              <Phone className="h-4 w-4 text-emerald-500" />
            </a>
          </div>
        </div>

        <Separator className="my-8 opacity-60" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted for
            <Sparkles className="h-3 w-3 text-primary" aria-hidden="true" />
            AI-Native Performance & Verified Discovery.
          </p>
        </div>
      </div>
    </footer>
  );
}