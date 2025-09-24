import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Project",
    href: "#project",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <div className="flex p-3 w-full">
      <p className="grow font-bold text-4xl">Portfolio</p>
      <NavLinks links={navLinks} />
      <MobileNavLinks links={navLinks} />
    </div>
  );
}
