import Image from "next/image";
import Link from "next/link";
import { profile, experience, techStack, projects, education, hobbies } from "@/lib/data";
import GitHubContributions from "@/components/github-contributions";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
      {/* Header: Image + Identity */}
      <header className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
        <Image
          src="/me.jpg"
          alt={profile.name}
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
        <div>
          <h1 className="text-base font-medium">{profile.name}</h1>
          <p>Profession : {profile.profession}</p>
          <p>{profile.location}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <Link href="/blogs">Blog</Link>
          </div>
        </div>
      </header>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="font-medium mb-3">Experience :</h2>
        {experience.map((exp) => (
          <div key={exp.company} className="mb-2">
            <p>
              - {exp.title} ({exp.company})
            </p>
            <p className="ml-4 text-zinc-500">{exp.period}</p>
          </div>
        ))}
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <p>
          <span className="font-medium">Tech Stack : </span>
          {techStack.join(", ")} and so on
        </p>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="font-medium mb-3">Projects :</h2>
        {projects.map((project) => (
          <p key={project.name} className="mb-1 ml-2">
            -{" "}
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>{" "}
            : {project.description}
          </p>
        ))}
        <p className="mt-2 ml-2 text-zinc-500">
          Note : Every saturday/sunday i build a lot of projects
        </p>
      </section>

      {/* Education */}
      <section className="mb-10">
        <p>
          <span className="font-medium">Education : </span>
          {education.degree} ({education.period})
        </p>
      </section>

      {/* Hobbies */}
      <section className="mb-10">
        <p>
          <span className="font-medium">Hobbies : </span>
          {hobbies.join(" , ")}
        </p>
      </section>

      {/* GitHub Contributions */}
      <section className="mb-10">
        <h2 className="font-medium mb-4">GitHub Contributions :</h2>
        <div className="overflow-x-auto">
          <GitHubContributions />
        </div>
      </section>

      {/* Cursor */}
      <div className="mt-6">
        <span className="cursor-blink" />
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-4 border-t border-zinc-200 text-sm text-zinc-400">
        <p>
          inspired from{" "}
          <a href="https://typehere.app" target="_blank" rel="noopener noreferrer">
            typehere.app
          </a>
        </p>
      </footer>
    </main>
  );
}
