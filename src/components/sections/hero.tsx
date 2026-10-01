"use client";

import {
  ArrowRight,
  Brain,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Search,
  Sparkles,
  Trophy,
} from "lucide-react";
import { useState } from "react";

import { ResumeModal } from "@/components/resume-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/data/profile";

const statIcons = [Sparkles, Search, Trophy, Brain];

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
    >
      {/* Dynamic ambient gradients */}
      <div
        aria-hidden="true"
        className="bg-mesh-gradient absolute inset-0 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 pointer-events-none opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_75%)]"
      />

      {/* Floating light orbs for futuristic atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent blur-3xl rounded-full"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7">
            {/* Status Badges */}
            <div className="animate-fade-in mb-6 flex flex-wrap items-center gap-2.5">
              <Badge
                variant="secondary"
                className="gap-2 rounded-full px-3.5 py-1.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for AI/ML Roles
              </Badge>

              <Badge
                variant="outline"
                className="gap-1.5 rounded-full px-3 py-1 font-mono border-primary/30 bg-primary/5 text-primary text-xs"
              >
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Agentic Browsing {profile.agenticBrowsingScore}
              </Badge>

              <Badge
                variant="outline"
                className="gap-1.5 rounded-full px-3 py-1 text-xs border-border/80 bg-background/50 backdrop-blur"
              >
                <MapPin className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
                {profile.location.current}
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient">
                {profile.name}
              </span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground/90">
              {profile.title}
            </p>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              {profile.headline}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 font-semibold group"
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Button>

              {/* Resume Preview Modal */}
              <ResumeModal>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 bg-background/60 backdrop-blur hover:border-primary hover:bg-primary/10 gap-2 font-medium"
                >
                  <Eye className="h-4 w-4 text-primary" />
                  <span>Preview Resume</span>
                </Button>
              </ResumeModal>

              {/* Direct Download CV */}
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border border-border/80 hover:bg-secondary/80 gap-2 font-medium"
              >
                <a
                  href={profile.resume.url}
                  download={profile.resume.filename}
                  aria-label="Download resume PDF"
                >
                  <Download className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Download CV</span>
                </a>
              </Button>

              <Button asChild size="lg" variant="ghost" className="hover:bg-accent/10">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  Get in Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4 text-sm" aria-label="Social links">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground hover:shadow-sm"
              >
                <Github className="h-4 w-4 text-primary" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground hover:shadow-sm"
              >
                <Linkedin className="h-4 w-4 text-[#0077b5]" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-foreground hover:shadow-sm"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          {/* Right Column: Futuristic Circular Profile Design */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Radiant Glow Ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 opacity-60 blur-2xl transition-all duration-700 group-hover:opacity-90 group-hover:blur-3xl animate-pulse-slow"
              />

              {/* Gradient Border Frame (Circle) */}
              <div className="relative rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-2xl">
                {/* Inner Padding Ring */}
                <div className="rounded-full p-1.5 bg-background/95 backdrop-blur-xl">
                  {/* Circular Image Container */}
                  <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-2 border-primary/30 bg-muted/40 shadow-inner">
                    {!imgError ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        onError={() => setImgError(true)}
                        className="h-full w-full object-cover object-[center_12%] scale-110 transition-transform duration-700 group-hover:scale-120"
                      />
                    ) : (
                      /* Fallback avatar */
                      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow-xl">
                          <span className="font-mono text-2xl font-black">YS</span>
                        </div>
                        <p className="mt-3 font-bold text-foreground">{profile.name}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Glass Pill: Top-Right */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-4 rounded-full border border-primary/30 bg-card/85 px-3.5 py-1.5 shadow-xl backdrop-blur-md text-xs font-semibold text-foreground flex items-center gap-1.5 animate-float">
                <Brain className="h-3.5 w-3.5 text-primary" />
                <span>AI/ML Engineer</span>
              </div>

              {/* Floating Glass Pill: Bottom-Left */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-4 rounded-full border border-emerald-500/30 bg-card/85 px-3.5 py-1.5 shadow-xl backdrop-blur-md text-xs font-medium text-foreground flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-[11px] text-emerald-500 font-semibold">Ready for Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-5 text-center backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <dd className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                  {stat.value}
                </dd>
                <dt className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}