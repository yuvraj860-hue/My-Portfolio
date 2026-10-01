"use client";

import { Award, Clock, ExternalLink, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="relative border-t py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-3 rounded-full border-primary/30 px-3.5 py-1 text-xs font-mono font-medium text-primary bg-primary/5"
          >
            <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
            Verifiable Credentials
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Verified <span className="text-gradient">Internships</span> & Certificates
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every credential below links directly to its official verified document — upholding strict Experience, Expertise, Authoritativeness, and Trustworthiness (EEAT).
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="glass-card-interactive group flex flex-col justify-between border-border/80"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <Award className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="gap-1.5 rounded-full font-mono text-xs"
                  >
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {cert.durationLabel}
                  </Badge>
                </div>
                <CardTitle className="mt-2 text-xl font-bold leading-snug">
                  {cert.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit text-xs border-primary/30 text-primary">
                  {cert.focus}
                </Badge>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col justify-between space-y-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="w-full gap-2 border-primary/30 hover:bg-primary/10 text-xs font-semibold"
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${cert.title} — opens Google Drive in new tab`}
                  >
                    <span>View Official Certificate</span>
                    <ExternalLink className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}