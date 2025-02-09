export function Skills() {
  const skills = {
    "Frameworks, Libraries & Databases": [
      "React Js",
      "Next Js",
      "Fast API",
      "Express Js",
      "Firebase",
      "React Query",
      "Postgresql",
      "Websockets",
      "Redis",
      "Prisma",
    ],
    Containerisation: ["Docker"],
    Languages: ["Typescript", "Java", "C", "C++", "Python", "Go"],
  };

  return (
    <section>
      <h2 className="text-lg font-bold border-b border-border pb-1 mb-3">
        TECH SKILLS
      </h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white dark:bg-secondary rounded-lg shadow-md p-4"
          >
            <h3 className="font-semibold mb-2 text-primary">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary dark:bg-accent text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
