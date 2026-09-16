import {
  Building2,
  GraduationCap,
  Home,
  MapPin,
  Smartphone,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

const aboutPoints = [
  {
    icon: GraduationCap,
    title: profile.university.name,
    detail: `${profile.university.program} · ${profile.university.city}`,
  },
  {
    icon: Home,
    title: "Origin",
    detail: profile.location.origin,
  },
  {
    icon: MapPin,
    title: "Currently Based In",
    detail: profile.location.current,
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="border-t bg-muted/30 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About Me
            </p>
            <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              An AI engineer who builds products people can verify — and trust.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I am an aspiring {profile.title} based in {profile.location.current},
              focused on {profile.university.program} at {profile.university.name} .
              My work sits at the intersection of machine learning and modern web
              engineering — building intelligent products, then making sure they
              are actually found by users and AI engines alike.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Beyond model building, I specialize in the modern search stack —
              SEO, AEO, GEO, LLMO, AISEO and EEAT — so every product I ship is
              discoverable, quotable and authoritative. Real internship
              certificates, public repositories and a verifiable 3/3 agentic
              browsing score back the claims on this page.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="rounded-full">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {aboutPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card key={point.title}>
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{point.title}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {point.detail}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}

            <Card>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Smartphone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <CardTitle className="text-base">My Focus</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    AI/ML engineering with a modern-web edge — models that work
                    in production, and product surfaces that work with search.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {["Machine Learning", "LLM Integration", "RAG", "Prompt Engineering"]
                  .map((focus) => (
                    <Badge key={focus} variant="outline" className="rounded-full">
                      {focus}
                    </Badge>
                  ))}
              </CardContent>
            </Card>

            <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
              <Building2 className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">
                  {profile.university.name}, {profile.university.city}
                </p>
                <p className="text-sm text-muted-foreground">
                  {profile.university.program}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}