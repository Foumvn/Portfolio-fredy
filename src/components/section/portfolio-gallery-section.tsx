"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: readonly string[];
  dates: string;
  href: string;
  active: boolean;
}

function ProjectCard({ title, description, technologies, dates, href, active }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => href !== "#" && window.open(href, "_blank")}
    >
      <div
        className="relative w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ perspective: "1200px" }}
      >
        {/* Card body */}
        <div
          className="relative z-0 rounded-2xl transition-all duration-500 overflow-hidden"
          style={{
            height: "200px",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
            transform: isHovered ? "rotateX(8deg) scale(1.02)" : "rotateX(0deg) scale(1)",
            background: "linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--card)) 100%)",
            border: "1px solid hsl(var(--border))",
          }}
        >
          {/* Tech tags floating inside */}
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 p-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Active indicator */}
          {active && (
            <div className="absolute top-3 right-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 rounded-b-2xl overflow-hidden transition-all duration-500"
          style={{
            background: "hsl(var(--card) / 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid hsl(var(--border))",
            borderTop: "none",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
            transform: isHovered ? "rotateX(-12deg)" : "rotateX(0deg)",
          }}
        >
          <div className="relative py-3 px-4">
            <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 min-h-[2.5rem] transition-colors duration-300">
              {title}
            </h3>
          </div>
          <div className="relative h-[40px]">
            <div className="absolute inset-x-0 top-0 h-[1px] border-t border-border/50" />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <span className="text-xs text-muted-foreground transition-colors duration-300">
                {dates}
              </span>
              {technologies.length > 5 && (
                <span className="text-xs text-muted-foreground">
                  +{technologies.length - 5} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGallerySection() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-bold">Portfolio Gallery</h2>
      <p className="text-sm text-muted-foreground mb-2">
        Interactive overview of my projects and achievements
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {DATA.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            dates={project.dates}
            href={project.href}
            active={project.active}
          />
        ))}
      </div>
    </div>
  );
}
