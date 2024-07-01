"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface INavButtonProps {
    href: string;
    label: string;
    isActive: boolean;
}

const NavButton = ({ href, label, isActive }: INavButtonProps) => {
    return (
        <Button asChild size='sm' variant='outline' className={
            cn(
                "text-white w-full border-none hover:bg-white/20 hover:text-white focus-visible:ring-offset-0 focus-visible:ring-transparent ",
                isActive ? "bg-white/20" : "bg-transparent"
            )
        }>
            <Link href={href}>{label}</Link>
        </Button>
    )
}

export default NavButton;