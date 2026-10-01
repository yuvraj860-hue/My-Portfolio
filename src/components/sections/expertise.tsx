"use client";

import {
  Bot,
  BrainCircuit,
  FileText,
  Globe,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { domains } from "@/data/profile";

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Bot,
  Search,
  MessagesSquare,
  Sparkles,
  FileText,
  Globe,
  ShieldCheck,
};

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-label="Expertise"
      className="relative border-t py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-3 rounded-full border-primary/30 px-3.5 py-1 text-xs font-mono font-medium text-primary bg-primary/5"
          >
            <Sparkles className="mr-1.5 h-3 w-3" />
            Specialized Domains
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Eight domains, one goal: products that <span className="text-gradient">machine intelligence</span> surfaces.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From building machine learning models to optimizing for modern AI discovery engines — Google, ChatGPT, Perplexity, and beyond.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain) => {
            const Icon = iconMap[domain.icon] ?? Sparkles;
            return (
              <Card
                key={domain.abbreviation}
                className="glass-card-interactive group relative flex flex-col justify-between overflow-hidden border-border/80"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/25">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <Badge
                    variant="outline"
                    className="mb-1.5 w-fit rounded-full font-mono text-[11px] border-primary/30 bg-primary/5 text-primary"
                  >
                    {domain.abbreviation}
                  </Badge>
                  <CardTitle className="text-base font-bold leading-snug">
                    {domain.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {domain.description}
                  </p>
                </CardContent>
                {/* Glowing subtle bottom line */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}