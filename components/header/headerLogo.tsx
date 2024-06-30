"use client";

import Image from "next/image"
import Link from "next/link";

const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex gap-x-2">
            <Image src="/app_logo.svg" height={28} width={28} alt="logo" />
            <div className="font-bold text-white text-2xl">Finance</div>
            </div>
        </Link>
    )
}

export default HeaderLogo;
