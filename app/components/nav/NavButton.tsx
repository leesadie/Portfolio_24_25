'use client';

import { font_bold } from "@/app/fonts";
import { useState } from "react";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavButton: React.FC<ButtonProps> = ({
    label,
    onClick
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
                ${isHovered ? 'bg-slate-50' : ''} 
                ${isFocused ? 'bg-slate-50' : ''}
                text-neutral-900
                text-sm
                rounded-lg
                py-3
                px-3
                ease-out duration-300`}
        >
            {label}
        </button>
    );
}

export default NavButton;