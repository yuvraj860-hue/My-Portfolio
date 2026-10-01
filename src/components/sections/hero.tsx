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

          {/* Right Column: Futuristic Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glow Halo */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-60 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl"
              />

              {/* Main Photo Card Container */}
              <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-border/80 bg-card/90 p-4 shadow-2xl backdrop-blur-xl">
                {/* Photo Display */}
                <div className="relative h-72 w-72 sm:h-80 sm:w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-muted to-accent/10 border border-primary/20">
                  {!imgError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Fallback avatar if no photo yet uploaded */
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-accent text-white shadow-xl shadow-primary/30">
                        <span className="font-mono text-3xl font-black">YS</span>
                      </div>
                      <p className="mt-4 font-bold text-foreground">{profile.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">Photo slot ready: public/profile.jpg</p>
                    </div>
                  )}

                  {/* Glass Tag on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-black/50 p-2.5 backdrop-blur-md text-white text-center">
                    <p className="text-xs font-semibold">{profile.name}</p>
                    <p className="text-[11px] text-white/80">{profile.title}</p>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-muted-foreground">
                    Verified Engineer · {profile.agenticBrowsingScore} Score
                  </span>
                </div>
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