"use client";

import HeaderLogo from "./headerLogo";
import Navigation from "./navigation";

const Header = () => {
    return <header className="h-16 bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
        <div className="flex w-full items-center justify-between">
            <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
            </div>
        </div>
    </header>
}

export default Header;