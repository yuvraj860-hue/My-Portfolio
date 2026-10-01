"use client";

import { Download, ExternalLink, FileText, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { profile } from "@/data/profile";

interface ResumeModalProps {
  children?: React.ReactNode;
}

export function ResumeModal({ children }: ResumeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children ? (
        <DialogTrigger asChild>{children}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden border-primary/40 bg-background/50 backdrop-blur hover:border-primary hover:bg-primary/10 transition-all"
          >
            <FileText className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
            <span>Preview Resume</span>
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="max-w-4xl h-[90vh] max-h-[850px] p-0 flex flex-col overflow-hidden border-border/80 bg-background/95 backdrop-blur-xl">
        {/* Header */}
        <DialogHeader className="p-4 sm:p-5 border-b flex-shrink-0 bg-muted/20 flex flex-row items-center justify-between space-y-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <DialogTitle className="text-base sm:text-lg font-bold">
                {profile.name} — Curriculum Vitae
              </DialogTitle>
            </div>
            <DialogDescription className="text-xs text-muted-foreground mt-0.5">
              {profile.title} · Updated {profile.resume.lastUpdated}
            </DialogDescription>
          </div>

          <div className="flex items-center gap-2 pr-6">
            <Button asChild size="sm" variant="outline" className="h-8 gap-1.5 text-xs">
              <a
                href={profile.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in new browser tab"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Open Tab</span>
              </a>
            </Button>

            <Button asChild size="sm" className="h-8 gap-1.5 text-xs bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href={profile.resume.url}
                download={profile.resume.filename}
                title="Download PDF directly"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download</span>
              </a>
            </Button>
          </div>
        </DialogHeader>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full h-full relative bg-muted/10 overflow-hidden">
          <object
            data={`${profile.resume.url}#toolbar=0&navpanes=0`}
            type="application/pdf"
            className="w-full h-full"
          >
            {/* Fallback if browser does not support inline PDF object */}
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-8 w-8" />
              </div>
              <div className="max-w-md">
                <h3 className="text-lg font-semibold">Resume Ready to View & Download</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your browser does not support embedding PDFs inline, or you are viewing on a mobile device. You can download or view it instantly with the buttons below.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button asChild size="default">
                  <a href={profile.resume.url} download={profile.resume.filename}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume PDF
                  </a>
                </Button>
                <Button asChild variant="outline" size="default">
                  <a href={profile.resume.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open in New Tab
                  </a>
                </Button>
              </div>
            </div>
          </object>
        </div>

        {/* Footer info pill */}
        <div className="p-2.5 px-4 border-t bg-muted/20 flex items-center justify-between text-[11px] text-muted-foreground flex-shrink-0">
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-primary" />
            Verified Profile: Agentic Browsing Score {profile.agenticBrowsingScore}
          </span>
          <span className="hidden sm:inline">File location: public/resume.pdf</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
