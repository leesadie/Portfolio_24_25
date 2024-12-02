'use client';

import AboutCards from "../components/about/AboutCards";
import AboutCardsSm from "../components/about/AboutCardsSm";

const AboutClient2 = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="hidden md:block">
                <AboutCards />
            </div>
            <div className="md:hidden">
                <AboutCardsSm />
            </div>
        </div>
    );
}

export default AboutClient2;