'use client';

import Container from "../Container";
import NavButton from "./NavButton";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="w-full z-10">
            <div className="pb-10 lg:pt-5 pt-5">
                <Container>
                    <div
                        className="
                            flex
                            flex-col
                            justify-start
                            items-start
                            gap-0
                            lg:text-base
                            text-sm
                            lg:pt-5
                            pt-2
                            pl-5
                            lg:pl-0
                            text-neutral-900
                        "
                    >
                        <NavButton 
                            label="Work"
                            onClick={() => router.push('/')} 
                        />
                        <NavButton 
                            label="About"
                            onClick={() => router.push('/about')} 
                        />
                        <NavButton 
                            label="Lab"
                            onClick={() => router.push('/lab')} 
                        />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;