"use client";

import { CheckCircle2, ExternalLink, Github, Globe, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/profile";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative border-t bg-muted/20 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-3 rounded-full border-primary/30 px-3.5 py-1 text-xs font-mono font-medium text-primary bg-primary/5"
          >
            <Sparkles className="mr-1.5 h-3 w-3" />
            Featured Work
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Built in public. <span className="text-gradient">Verifiable</span> on GitHub & Live.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Production-grade products with live deployments and public source code — so recruiters and engineering leads can test live systems and inspect architecture, code quality, and implementation details.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="glass-card-interactive group overflow-hidden rounded-2xl border-border/80"
            >
              {/* Card Banner */}
              <div
                className="relative flex h-48 items-center justify-center border-b border-border/80 bg-gradient-to-br from-primary/10 via-background to-accent/10 transition-colors"
                aria-hidden="true"
              >
                <div className="relative text-center">
                  <span className="rounded-2xl border border-primary/30 bg-card/80 px-8 py-3.5 font-mono text-2xl font-black tracking-tight text-primary shadow-lg backdrop-blur">
                    {project.name.split(" ")[0]}
                  </span>
                  <p className="mt-2 text-xs font-mono text-muted-foreground">
                    Next-Gen AI Online Shopping Engine
                  </p>
                </div>

                {"live" in project && project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur transition-all hover:bg-emerald-500/20"
                    aria-hidden="false"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Live Link
                    <ExternalLink className="h-3 w-3 opacity-70" />
                  </a>
                )}
              </div>

              <CardHeader className="p-6 sm:p-8 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="gap-1.5 font-mono text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {project.role}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-2xl font-extrabold leading-snug">
                  {"live" in project && project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2 group/title"
                    >
                      <span>{project.name}</span>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover/title:opacity-100 transition-opacity text-primary" />
                    </a>
                  ) : (
                    project.name
                  )}
                </CardTitle>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
                <ul className="space-y-2.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/80 bg-muted/60 px-3 py-1 font-mono text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border/60">
                  {"live" in project && project.live && (
                    <Button
                      asChild
                      size="default"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm font-medium"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Globe className="h-4 w-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      asChild
                      variant={"live" in project && project.live ? "outline" : "default"}
                      size="default"
                      className={
                        "live" in project && project.live
                          ? "border-border/80 hover:bg-muted font-medium"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      }
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>View on GitHub</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}