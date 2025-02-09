"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
}

export function Projects() {
  const [projects] = useState<Project[]>([
    {
      title: "Google Docs Clone",
      description:
        "Built a multiple collaborative text editor showcasing my skills in web sockets and RESTful APIs.",
      githubUrl: "https://github.com/subediaakash/Google-Docs-Like-Text-Editor",
    },
    {
      title: "Splitwise Clone",
      description:
        "Developed a web app for tracking and managing group expenses, including a pseudo-payment system to streamline the process.",
      githubUrl: "https://github.com/subediaakash/splitwise-clone",
    },
    {
      title: "Hotel Management System",
      description:
        "Built a full-stack hotel management system with hotel search, admin-controlled bookings, and an integrated pseudo-payment system.",
      githubUrl: "https://github.com/subediaakash/hotel-management-system",
    },
    {
      title: "Bounty Management Backend",
      description:
        "Developed a backend system enabling users to assign problems with bounties. Users can solve these bounties, and upon admin verification, the bounty is awarded to the solver.",
      githubUrl: "https://github.com/subediaakash/Bounty-management-System",
    },
  ]);

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-bold border-b border-border pb-1 mb-3">
        PROJECTS
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between space-y-3 p-4 rounded-lg border border-border bg-white dark:bg-secondary shadow-md h-full"
          >
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-secondary-foreground">{project.description}</p>
            </div>
            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
