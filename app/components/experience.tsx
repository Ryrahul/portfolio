export function Experience() {
  return (
    <section>
      <h2 className="text-lg font-bold border-b border-border pb-1 mb-3">PROFESSIONAL EXPERIENCE</h2>
      <div className="space-y-6">
        <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-primary">Lead, Neuron Club</h3>
            <span className="text-sm text-muted-foreground">Sept 2024 - Present</span>
          </div>
          <ul className="list-disc list-inside text-secondary-foreground space-y-1">
            <li>Organized tech events promoting collaborative learning.</li>
            <li>Conducted a 2-day workshop teaching JavaScript and React.</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-primary">Web Facilitator, GDSC-FETJU</h3>
            <span className="text-sm text-muted-foreground">Oct 2024 - Present</span>
          </div>
          <ul className="list-disc list-inside text-secondary-foreground space-y-1">
            <li>
              Contributed to improving the official website of Google developer student clubs, Jain University, by
              transitioning from a React-based framework to Next.js.
            </li>
            <li>Led a two-day online workshop on Firebase with hands-on practical examples.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

