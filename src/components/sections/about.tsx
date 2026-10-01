"use client";

import {
  Cpu,
  GraduationCap,
  Home,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

const aboutCards = [
  {
    icon: GraduationCap,
    title: profile.university.name,
    detail: `${profile.university.program} · ${profile.university.city}`,
    tag: profile.university.enrolled,
  },
  {
    icon: MapPin,
    title: "Current Location",
    detail: profile.location.current,
    tag: profile.location.timezone,
  },
  {
    icon: Home,
    title: "Hometown / Origin",
    detail: profile.location.origin,
    tag: "India",
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative border-t bg-muted/20 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <Badge
              variant="outline"
              className="mb-3 rounded-full border-primary/30 px-3.5 py-1 text-xs font-mono font-medium text-primary bg-primary/5"
            >
              <Sparkles className="mr-1.5 h-3 w-3" />
              Engineering Philosophy
            </Badge>

            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              An AI engineer building systems that <span className="text-gradient">perform</span> and get discovered.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am an aspiring <strong className="text-foreground font-semibold">{profile.title}</strong> based in {profile.location.current}, pursuing my {profile.university.program} at {profile.university.name}.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              My engineering focus bridges two critical worlds: building resilient machine learning pipelines and RAG systems, while ensuring the resulting software is engineered for modern discovery — encompassing classic SEO as well as modern Generative and Answer Engines (AEO, GEO, LLMO).
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every skill on this portfolio is backed by verifiable artifacts: real internship certificates, public GitHub repositories, and a verified 3/3 Agentic Browsing Score.
            </p>

            {/* Tech Stack Pills */}
            <div className="mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Core Technologies & Frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg border border-border/80 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="space-y-4 lg:col-span-5">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="glass-card-interactive flex items-start gap-4 rounded-2xl p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold text-foreground">
                        {card.title}
                      </p>
                      <Badge variant="secondary" className="font-mono text-[10px]">
                        {card.tag}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {card.detail}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Special Focus Card */}
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/5 p-6 shadow-md backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground">AI Integration Edge</h3>
                  <p className="text-xs text-muted-foreground">Agentic Workflows & Search Visibility</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Optimized for autonomous agent interaction and citation across AI engines like ChatGPT, Perplexity, and Google AI Overviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}