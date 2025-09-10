import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex p-3">
      <p className="grow font-bold text-4xl">Portfolio</p>
      <div className="grow flex justify-end gap-7 text-1xl">
        <Link href={"#about "}>About</Link>
        <Link href={"#experience"}>Experience</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
    </div>
  )
}
