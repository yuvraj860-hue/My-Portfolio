import { Github, Linkedin, Mail, MapPin } from "lucide-react";

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
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/" + profile.links.linkedinUsername,
    href: profile.links.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/" + profile.links.githubUsername,
    href: profile.links.github,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="border-t bg-muted/30 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something intelligent together.
            </h2>
            <p className="mt-4 text-muted-foreground">
              I&apos;m actively looking for AI/ML, AI integration and full-stack
              opportunities. If you need someone who ships verified work and
              understands modern AI-driven discovery — let&apos;s talk.
            </p>

            <div className="mt-8 space-y-4">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <Card key={channel.label}>
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-sm text-muted-foreground">
                          {channel.label}
                        </CardTitle>
                        <a
                          href={channel.href}
                          target={
                            channel.href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel={
                            channel.href.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="block truncate text-sm font-semibold transition-colors hover:text-primary"
                        >
                          {channel.value}
                        </a>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="lg:pt-24">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Open to interview discussions
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Based in {profile.location.current} · {profile.location.timezone}
                  · Willing to relocate.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Recruiters can reach me directly at{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {profile.email}
                  </a>{" "}
                  — I respond quickly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                      Email Me
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <p className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {profile.location.current} · Origin: {profile.location.origin}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}