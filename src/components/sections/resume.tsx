"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Download,
  Eye,
  FileCheck,
  FileText,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { ResumeModal } from "@/components/resume-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  education,
  experience,
  profile,
  skillCategories,
} from "@/data/profile";
import { cn } from "@/lib/utils";

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills">("experience");

  return (
    <section
      id="resume"
      aria-label="Resume and Experience"
      className="relative border-t py-24 overflow-hidden"
    >
      {/* Background glow effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-3 rounded-full border-primary/30 px-3.5 py-1 text-xs font-mono font-medium text-primary bg-primary/5"
          >
            <Sparkles className="mr-1.5 h-3 w-3" />
            Curriculum Vitae & Verified Credentials
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Interactive <span className="text-gradient">Resume</span> & Background
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A comprehensive breakdown of my engineering education, verified internships, and technical competencies.
          </p>
        </div>

        {/* Highlighted Resume Action Card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-card/90 to-primary/[0.04] p-6 sm:p-8 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-accent text-white shadow-lg shadow-primary/25">
                <FileText className="h-7 w-7" />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-background" />
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {profile.name}&apos;s Official Resume
                  </h3>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {profile.resume.lastUpdated}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {profile.title} · {profile.university.program}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 text-emerald-500 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Ready for Recruiters & Hiring Managers
                  </span>
                  <span>· Format: PDF ({profile.resume.filename})</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <ResumeModal>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 gap-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview Full Resume</span>
                </Button>
              </ResumeModal>

              <Button asChild size="lg" variant="outline" className="border-border hover:bg-accent/10 gap-2">
                <a
                  href={profile.resume.url}
                  download={profile.resume.filename}
                  aria-label="Download Yuvraj Singh's Resume PDF"
                >
                  <Download className="h-4 w-4 text-primary" />
                  <span>Download CV</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex rounded-xl border bg-muted/40 p-1.5 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("experience")}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200",
                activeTab === "experience"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Briefcase className="h-4 w-4" />
              <span>Internships & Experience</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200",
                activeTab === "education"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200",
                activeTab === "skills"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <BookOpen className="h-4 w-4" />
              <span>Skill Matrix</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Experience */}
        {activeTab === "experience" && (
          <div className="mt-8 space-y-6 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2">
              {experience.map((item, idx) => (
                <Card
                  key={item.role + idx}
                  className="glass-card-interactive flex flex-col justify-between border-border/80"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Award className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary" className="font-mono text-xs">
                        {item.period}
                      </Badge>
                    </div>
                    <CardTitle className="mt-2 text-lg leading-snug">
                      {item.role}
                    </CardTitle>
                    <CardDescription className="text-xs font-medium text-primary">
                      {item.organization} · {item.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="rounded-lg bg-muted/40 p-3 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Core Focus: </span>
                      {item.focus}
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full gap-1.5 text-xs">
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileCheck className="h-3.5 w-3.5 text-primary" />
                        <span>Verify Certificate Online</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Education */}
        {activeTab === "education" && (
          <div className="mt-8 animate-fade-in">
            {education.map((edu, idx) => (
              <Card
                key={edu.institution + idx}
                className="glass-card-interactive max-w-3xl mx-auto border-border/80"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-sm font-medium text-foreground">
                          {edu.field}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit font-mono text-xs">
                      {edu.period} · {edu.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{edu.institution}</strong> — {edu.city}
                  </div>
                  <ul className="space-y-2 border-t pt-4">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Tab Content: Skills */}
        {activeTab === "skills" && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in">
            {skillCategories.map((cat) => (
              <Card key={cat.category} className="glass-card-interactive border-border/80">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold text-foreground">
                    {cat.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-lg px-2.5 py-1 text-xs font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
