import { Award, Clock, ExternalLink } from "lucide-react";

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
      className="border-t py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Experience & Certifications
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Verified internships — certificates linked below.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every credential on this page is linked to its original certificate,
            so the claims are independently verifiable — the EEAT way.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="group flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="gap-1 rounded-full font-mono"
                  >
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {cert.durationLabel}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-snug">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <Badge variant="outline" className="mb-3 w-fit">
                  {cert.focus}
                </Badge>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-5 w-fit"
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${cert.title} — opens in new tab`}
                  >
                    View Certificate
                    <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
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