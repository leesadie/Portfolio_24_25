'use client';

import Container from "../Container";
import NavButton from "./NavButton";
import { useRouter } from "next/navigation";
import { font_bold } from "@/app/fonts";
import { font_med } from "@/app/fonts";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="w-full fixed z-10 pt-5">
            <div className="">
                <Container>
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            text-neutral-900
                        "
                    >
                        {/* Left Text */}
                        <div className={`${font_bold.className} text-neutral-900 text-2xl cursor-pointer hidden md:block`}
                            onClick={() => router.push('/')}>
                            SL.
                        </div>
                        {/* Navigation Buttons */}
                        <div className={`flex space-x-2 bg-gray-200 shadow-sm rounded-xl mx-auto md:mx-none bg-opacity-70 ${font_med.className}`}>
                            <NavButton 
                                label="Work"
                                onClick={() => router.push('/')} 
                            />
                            <NavButton 
                                label="About"
                                onClick={() => router.push('/about')} 
                            />
                            <NavButton 
                                label="Exploration"
                                onClick={() => router.push('/lab')} 
                            />
                        </div>
                        {/* Right Text */}
                        <div 
                            className=
                                {`${font_bold.className} 
                                text-neutral-900
                                cursor-pointer 
                                hidden 
                                md:block
                                rounded-xl
                                hover:bg-gray-200
                                px-3
                                py-2
                                transition
                                ease-out
                                duration-300`}
                            onClick={() => router.push('/')}
                        >
                            <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                                <div>
                                    Connect
                                </div>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;