"use client";

import { usePathname } from "next/navigation";
import NavButton from "./navButton";

type RouteObj = {
    href: string,
    label: String
}

const routes: Array<RouteObj> = [
    {
        href: '/',
        label: 'Overview'
    },
    {
        href: '/transactions',
        label: 'Transactions'
    },
    {
        href: '/accounts',
        label: 'Accounts'
    },
    {
        href: '/catergories',
        label: 'Categories'
    },
    {
        href: '/settings',
        label: 'Settings'
    }
]

const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {routes.map((route: RouteObj) => (
            <NavButton
                label={route.label} 
                href={route.href} 
                isActive={pathname === route.href} />))}
        </nav>
    )
}

export default Navigation;