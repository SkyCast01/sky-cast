import Logo from "./logo";
import { ModeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-center dark:bg-zinc-950 px-8 py-4 border-b border-b-zinc-200 dark:border-b-zinc-700">
      <Logo />
      <ModeToggle />
    </header>
  );
}
