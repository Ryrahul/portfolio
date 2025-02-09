import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border pt-8 pb-4">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-sm text-muted-foreground">
          Made with love by Aakash
        </p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/aakash-subedi-a9986625a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://x.com/Aakash12527680"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/subediaakash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
