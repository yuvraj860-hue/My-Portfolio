import { CheckCircle2, ExternalLink } from "lucide-react";

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
      className="border-t bg-muted/30 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Projects
          </p>
          <h2 className="text-balance mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built in public. Verifiable on GitHub.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real products with public source code — so recruiters and hiring
            managers can inspect the work, not just take my word for it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="group overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="flex h-40 items-center justify-center border-b bg-primary/[0.04] transition-colors group-hover:bg-primary/[0.07]"
                aria-hidden="true"
              >
                <span className="rounded-xl bg-primary/10 px-6 py-3 font-mono text-lg font-bold tracking-tight text-primary">
                  {project.name.split(" ")[0]}
                </span>
              </div>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{project.status}</Badge>
                  <Badge variant="outline">{project.role}</Badge>
                </div>
                <CardTitle className="mt-3 text-xl leading-snug">
                  {project.name}
                </CardTitle>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-full font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button asChild size="sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                      <ExternalLink
                        className="ml-1 h-4 w-4"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}