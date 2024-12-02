'use client';

import { CiFaceSmile } from "react-icons/ci";
import Container from "../Container";

const Footer = () => {
    return (
        <div className="md:mx-80 z-10">
            <div className="pb-10">
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        md:justify-between
                        justify-center
                        text-sm
                        text-neutral-900
                        opacity-50
                        gap-1
                    "
                >
                    <div className="hidden md:block">
                        2024-2025 Portfolio by Sadie Lee
                    </div>
                    <div className="flex flex-row gap-5">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:leesadie025@gmail.com"
                            className="hover:opacity-50 transition cursor-pointer"
                        >
                            Email
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/leesadie/"
                            className="hover:opacity-50 transition cursor-pointer"
                        >
                            LinkedIn
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/leesadie"
                            className="hover:opacity-50 transition cursor-pointer"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;