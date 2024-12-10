'use client';

import Container from "../Container";
import NavButton from "./NavButton";
import { useRouter } from "next/navigation";
import { font_bold } from "@/app/fonts";
import { font_med } from "@/app/fonts";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="w-full md:fixed z-10 pt-5">
            <div className="">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            text-neutral-900
                            mx-5
                            md:mx-0
                        "
                    >
                        {/* Left Text */}
                        <div className={`${font_bold.className} text-neutral-900 text-xl cursor-pointer`}
                            onClick={() => router.push('/')}>
                            SL.
                        </div>
                        {/* Navigation Buttons */}
                        <div className={`flex flex-row ${font_med.className}`}>
                            <NavButton 
                                label="About"
                                onClick={() => router.push('/about')} 
                            />
                            <a target="_blank" rel="noopener noreferrer" href="files/Sadie_Lee_Resume.pdf">
                                <div className="text-neutral-900 bg-neutral-200 hover:opacity-50 text-sm rounded-md py-2 px-4 ease-out duration-300 transition">
                                    Resume
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