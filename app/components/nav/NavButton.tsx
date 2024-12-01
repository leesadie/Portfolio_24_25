'use client';

import { font_bold } from "@/app/fonts";
import { useState } from "react";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    bg?: boolean;
}

const NavButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    bg
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false)

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
                transition
                ${isHovered ? 'opacity-50' : ''} 
                ${isFocused ? 'opacity-50' : ''}
                ${bg ? 'bg-neutral-200' : 'bg-none'}
                text-neutral-900
                text-sm
                rounded-md
                py-2
                px-4
                ease-out duration-300
                cursor-pointer`}
        >
            {label}
        </button>
    );
}

export default NavButton;