"use client";

import {
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { ResumeModal } from "@/components/resume-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profile } from "@/data/profile";

const contactChannels = [
  {
    icon: Mail,
    label: "Direct Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    value: `linkedin.com/in/${profile.links.linkedinUsername}`,
    href: profile.links.linkedin,
  },
  {
    icon: Github,
    label: "GitHub Profile",
    value: `github.com/${profile.links.githubUsername}`,
    href: profile.links.github,
  },
] as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
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
              Get In Touch
            </Badge>

            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s build something <span className="text-gradient">intelligent</span> together.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I am actively seeking AI/ML engineering, AI integration, and full-stack software development roles. If you want an engineer who ships verified work and masters modern AI-driven discovery — let&apos;s connect.
            </p>

            <div className="mt-8 space-y-3.5">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={channel.label}
                    className="glass-card-interactive flex items-center justify-between rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-muted-foreground">
                          {channel.label}
                        </p>
                        <a
                          href={channel.href}
                          target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                          className="truncate text-sm font-bold text-foreground hover:text-primary transition-colors block"
                        >
                          {channel.value}
                        </a>
                      </div>
                    </div>

                    {channel.label === "Direct Email" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleCopyEmail}
                        className="h-8 gap-1.5 text-xs"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="text-emerald-500 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Copy</span>
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column / Interview Card */}
          <div className="lg:col-span-5">
            <Card className="glass-panel overflow-hidden rounded-2xl border-primary/30 bg-gradient-to-br from-card via-card to-primary/[0.05]">
              <CardHeader className="p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-500">
                    Open for Hiring
                  </p>
                </div>
                <CardTitle className="mt-2 text-2xl font-bold">
                  Interview Discussions & Roles
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Based in {profile.location.current} ({profile.location.timezone}) · Open to on-site, hybrid & remote roles.
                </p>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 pt-0 space-y-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Recruiters and hiring managers can reach me directly. I check emails multiple times a day and respond promptly.
                </p>

                <div className="space-y-2.5">
                  <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md shadow-primary/20">
                    <a href={`mailto:${profile.email}`} className="gap-2">
                      <Send className="h-4 w-4" />
                      <span>Send an Email</span>
                    </a>
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <ResumeModal>
                      <Button variant="outline" size="default" className="w-full text-xs font-semibold gap-1.5 border-primary/30 hover:bg-primary/10">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        <span>View Resume</span>
                      </Button>
                    </ResumeModal>

                    <Button asChild variant="secondary" size="default" className="w-full text-xs font-semibold gap-1.5">
                      <a href={profile.resume.url} download={profile.resume.filename}>
                        <Download className="h-3.5 w-3.5 text-primary" />
                        <span>Download CV</span>
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{profile.location.current} · Hometown: {profile.location.origin}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}