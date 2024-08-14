"use client";
import React, { useState } from "react";
import { HoveredLink, Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Logo from "@/public/peperama.jpg";
import { socialMedia } from "@/data";

export default function Navbar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <NavbarC className="top-2 w-[95%]" />
        </div>
    );
}

function NavbarC({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "fixed top-4 inset-x-0 w-full max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>
                <div id="left" className="flex items-center justify-center gap-3">
                    <div className="brand-logo mr-3 sm:mr-8 w-6 sm:w-8 aspect-square">
                        <Image alt="logo" src={Logo} />
                    </div>
                    <HoveredLink href="#">Buy</HoveredLink>
                    <HoveredLink href="#">Chart</HoveredLink>
                </div>
                <div id="right" className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                    {socialMedia.map((profile) => (
                        <div
                            key={profile.id}
                            className="relative w-8 sm:w-10 aspect-square cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <Image src={profile.img} alt={profile.img} fill />
                        </div>
                    ))}
                </div>
            </Menu>
        </div>
    );
}
