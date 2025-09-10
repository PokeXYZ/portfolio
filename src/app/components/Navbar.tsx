import Link from "next/link";

export function Navbar() {
  return (
    <div className="border flex p-3">
      <p className="border grow font-bold">portfolio</p>
      <div className="border grow">
        <Link href={"#about "}>About</Link>
        <Link href={"#experience"}>Experience</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
    </div>
  )
}
