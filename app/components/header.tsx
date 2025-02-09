export function Header() {
  return (
    <header className="space-y-1">
      <h1 className="text-3xl font-bold tracking-tight">AAKASH SUBEDI</h1>
      <h2 className="text-xl font-semibold text-muted-foreground">FULL STACK DEVELOPER</h2>
      <p className="text-sm text-muted-foreground">
        Jakkashandra, Kanakapura |
        <a
          href="https://devaakash.xyz"
          className="text-primary hover:underline hover:underline-offset-4 transition-all duration-200 mx-1"
        >
          devaakash.xyz
        </a>
        |
        <a
          href="mailto:contact.aakash77@gmail.com"
          className="text-primary hover:underline hover:underline-offset-4 transition-all duration-200 ml-1"
        >
          contact.aakash77@gmail.com
        </a>
      </p>
    </header>
  )
}

