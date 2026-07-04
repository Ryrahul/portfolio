import Image from "next/image";
import Link from "next/link";
import { profile, experience, techStack, projects, education, hobbies, openSourceContributions } from "@/lib/data";
import GitHubContributions from "@/components/github-contributions";
import TypingArea from "@/components/typing-area";
import CompanyHoverCard from "@/components/company-hover-card";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
      {/* Header: Image + Identity */}
      <header className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
        <Image
          src="/me.png"
          alt={profile.name}
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
        <div>
          <h1 className="text-base font-medium">{profile.name}</h1>
          <p>Profession : {profile.profession}</p>
          <p>{profile.location} <span role="img" aria-label="Nepal flag">🇳🇵</span></p>
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
            <a href={profile.npm} target="_blank" rel="noopener noreferrer">
              npm
            </a>
            <a href={profile.hashnode} target="_blank" rel="noopener noreferrer">
              Blog
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </header>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="font-medium mb-3">Experience :</h2>
        {(() => {
          // Group consecutive entries by company
          const grouped: { company: string; companyInfo: typeof experience[0]["companyInfo"]; roles: { title: string; period: string }[] }[] = [];
          for (const exp of experience) {
            const last = grouped[grouped.length - 1];
            if (last && last.company === exp.company) {
              last.roles.push({ title: exp.title, period: exp.period });
            } else {
              grouped.push({
                company: exp.company,
                companyInfo: exp.companyInfo,
                roles: [{ title: exp.title, period: exp.period }],
              });
            }
          }
          return grouped.map((group) =>
            group.roles.length === 1 ? (
              <div key={`${group.company}-${group.roles[0].title}`} className="mb-2">
                <p>
                  - {group.roles[0].title} (
                  {group.companyInfo ? (
                    <CompanyHoverCard company={group.company} companyInfo={group.companyInfo} />
                  ) : (
                    group.company
                  )}
                  )
                </p>
                <p className="ml-4 text-zinc-500">{group.roles[0].period}</p>
              </div>
            ) : (
              <div key={group.company} className="mb-4">
                <p className="mb-1">
                  -{" "}
                  {group.companyInfo ? (
                    <CompanyHoverCard company={group.company} companyInfo={group.companyInfo} />
                  ) : (
                    group.company
                  )}
                </p>
                <div className="ml-4">
                  {group.roles.map((role, i) => (
                    <div key={role.title} className="relative pl-5 pb-2">
                      {/* Vertical line */}
                      {i < group.roles.length - 1 && (
                        <div className="absolute left-[5px] top-[10px] bottom-0 w-px bg-zinc-300" />
                      )}
                      {/* Dot */}
                      <div className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full border-2 border-zinc-400 bg-white" />
                      <p className="font-medium text-sm">{role.title}</p>
                      <p className="text-zinc-500 text-sm">{role.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          );
        })()}
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
          <div key={project.name} className="mb-1 ml-2">
            <p>
              -{" "}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>{" "}
              : {project.description}
              {"liveUrl" in project && project.liveUrl && (
                <>
                  {" "}
                  (
                  <a
                    href={project.liveUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500"
                  >
                    live
                  </a>
                  )
                </>
              )}
            </p>
          </div>
        ))}
        <p className="mt-2 ml-2 text-zinc-500">
          More projects at{" "}
          <a
            href="https://github.com/Ryrahul?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Ryrahul
          </a>
        </p>
      </section>

      {/* Open Source Contributions */}
      <section className="mb-10">
        <h2 className="font-medium mb-3">Open Source :</h2>
        <p className="ml-2 mb-3">
          - Core contributor to{" "}
          <a
            href={openSourceContributions.vendure.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vendure
          </a>{" "}
          e-commerce framework (8.2k+ stars) with{" "}
          <a
            href={openSourceContributions.vendure.prsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {openSourceContributions.vendure.prCount} merged PRs
          </a>
        </p>
        <p className="ml-2 mb-3">
          - Contributor to{" "}
          <a
            href={openSourceContributions.vex.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vex
          </a>{" "}
          — CLI tool & MCP server for Vendure Admin API (
          <a
            href={openSourceContributions.vex.prUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            PR
          </a>
          )
        </p>
        <p className="ml-2 mb-3">
          - Published npm packages under{" "}
          <a
            href={openSourceContributions.npmPackages}
            target="_blank"
            rel="noopener noreferrer"
          >
            @rahul_vendure
          </a>{" "}
          scope
        </p>
        <div className="ml-2 mt-4">
          <a
            href={openSourceContributions.vendure.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={openSourceContributions.vendure.badgeUrl}
              alt="Vendure Enthusiast"
              width={480}
              height={240}
              className="max-w-full h-auto"
            />
          </a>
        </div>
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

      {/* Typing Area */}
      <section className="mt-6">
        <TypingArea />
      </section>

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
