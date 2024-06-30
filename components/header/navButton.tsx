"use client";

interface INavButtonProps {
    href: String;
    label: String;
    isActive: boolean;
}

const NavButton = ({ href, label, isActive }: INavButtonProps) => {
    return (
        <div>Nav Button</div>
    )
}

export default NavButton;