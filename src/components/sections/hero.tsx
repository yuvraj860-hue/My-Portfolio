import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="bg-mesh-gradient absolute inset-0 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 pointer-events-none opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          <div className="animate-fade-in mb-6 flex flex-wrap items-center gap-3">
            <Badge
              variant="secondary"
              className="gap-1.5 rounded-full px-3 py-1"
            >
              <span
                className="relative flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to AI/ML opportunities
            </Badge>
            <Badge
              variant="outline"
              className="gap-1.5 rounded-full px-3 py-1 font-mono"
            >
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Agentic Browsing Score {profile.agenticBrowsingScore}
            </Badge>
            <Badge
              variant="outline"
              className="gap-1.5 rounded-full px-3 py-1"
            >
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {profile.location.current}
            </Badge>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="text-balance mt-4 text-xl font-semibold text-muted-foreground sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="mr-1 h-4 w-4" aria-hidden="true" />
                Get in Touch
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact" aria-label="Download resume">
                <Download className="mr-1 h-4 w-4" aria-hidden="true" />
                Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4" aria-label="Social links">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border bg-card/70 p-4 text-center backdrop-blur-sm"
            >
              <dd className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}