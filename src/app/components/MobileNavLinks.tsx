"use client"
import { Icon } from "@iconify/react";
import Link from "next/link"
import {FC, useState } from "react"

interface NavLinksProps {
    links: {
        href: string;
        title: string;
    }[];
}   

const MobileNavLinks: FC<NavLinksProps> = ({ links }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="grow flex justify-end gap-6 text-2xl sm:hidden  ">
            <Icon
            
             icon={"line-md:close-to-menu-transition"} className="size-10" onClick={() => setOpen(!open)} />
            { open && (
            <div className="absolute top-10 flex flex-col p-2 gap-3 rounded-2xl bg-gradient-to-b from-blue-750 to-blue-50">
                {links.map((link) => {
                    return (
                        <Link key={link.title} href={link.href}>
                            {link.title}
                        </Link>
                    );
                })}
            </div>
            )}
        </div>
    );
};

export default MobileNavLinks;
