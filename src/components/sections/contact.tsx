"use client";

import {
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
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
    key: "phone",
    icon: Phone,
    label: "Phone / WhatsApp",
    value: profile.phone,
    href: profile.links.phoneUrl,
    copyValue: profile.phone,
    badge: "Direct Call",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    key: "email",
    icon: Mail,
    label: "Direct Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    copyValue: profile.email,
    badge: "Fast Reply",
    badgeColor: "border-primary/30 bg-primary/10 text-primary",
  },
  {
    key: "linkedin",
    icon: Linkedin,
    label: "LinkedIn Profile",
    value: `linkedin.com/in/${profile.links.linkedinUsername}`,
    href: profile.links.linkedin,
    badge: "Connect",
    badgeColor: "border-blue-500/30 bg-blue-500/10 text-[#0077b5]",
  },
  {
    key: "github",
    icon: Github,
    label: "GitHub Profile",
    value: `github.com/${profile.links.githubUsername}`,
    href: profile.links.github,
    badge: "Repositories",
    badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
] as const;

export function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
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
                const isCopied = copiedKey === channel.key;
                return (
                  <div
                    key={channel.label}
                    className="glass-card-interactive flex items-center justify-between rounded-xl p-4 transition-all hover:border-primary/50"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-medium text-muted-foreground">
                            {channel.label}
                          </p>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${channel.badgeColor}`}>
                            {channel.badge}
                          </span>
                        </div>
                        <a
                          href={channel.href}
                          target={channel.href.startsWith("http") ? "_blank" : undefined}
                          rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="truncate text-sm font-bold text-foreground hover:text-primary transition-colors block mt-0.5"
                        >
                          {channel.value}
                        </a>
                      </div>
                    </div>

                    {"copyValue" in channel && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy(channel.copyValue, channel.key)}
                        className="h-8 gap-1.5 text-xs shrink-0"
                        title={`Copy ${channel.label}`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="text-emerald-500 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
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
                  Recruiters and hiring managers can reach me directly via call, email, or WhatsApp. I respond promptly.
                </p>

                <div className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md shadow-primary/20 text-xs sm:text-sm">
                      <a href={`mailto:${profile.email}`} className="gap-2">
                        <Mail className="h-4 w-4" />
                        <span>Send Email</span>
                      </a>
                    </Button>

                    <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-600/20 text-xs sm:text-sm">
                      <a href={profile.links.phoneUrl} className="gap-2">
                        <Phone className="h-4 w-4" />
                        <span>Call Now</span>
                      </a>
                    </Button>
                  </div>

                  <a
                    href={profile.links.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all shadow-sm"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Message on WhatsApp ({profile.phone})</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2 pt-1">
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