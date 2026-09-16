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

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      className="border-t py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Expertise
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Eight domains, one goal: products that machine intelligence surfaces.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From building ML systems to optimizing for every kind of modern
            discovery engine — classic search and generative AI alike.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain) => {
            const Icon = iconMap[domain.icon] ?? Sparkles;
            return (
              <Card
                key={domain.abbreviation}
                className="group relative -translate-y-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <Badge
                    variant="outline"
                    className="mb-1 w-fit rounded-full font-mono text-[0.65rem]"
                  >
                    {domain.abbreviation}
                  </Badge>
                  <CardTitle className="text-base leading-snug">
                    {domain.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {domain.description}
                  </p>
                </CardContent>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}