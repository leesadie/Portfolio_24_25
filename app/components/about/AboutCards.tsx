'use client';

import { font_bold, font_med } from "@/app/fonts";
import { useState } from "react";

const hobbies = [
    { image: '/images/about/code.svg', description: 'test for now1'},
    { image: '/images/about/travel.svg', description: 'test for now2'},
    { image: '/images/about/alaska.svg', description: 'test for now3'},
    { image: '/images/about/ballet.svg', description: 'test for now4'},
    { image: '/images/about/photo.svg', description: 'test for now5'},
    { image: '/images/about/nature.svg', description: 'test for now6'},
    { image: '/images/about/music.svg', description: 'test for now7'},
]

const AboutCards: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
            <div className="relative w-full max-w-4x h-[450px]">
                {hobbies.map((hobby, index) => {
                    const offset = index * 170 - (hobbies.length * 40);
                    const heightOffset = [150, 100, 50, 25, 50, 100, 150];
                    const rotation = [-12, -8, -5, 0, 5, 8, 12];
                    const zIndex = hobbies.length - index;

                    return (
                        <div
                            key={index}
                            className={`
                                absolute
                                inset-0s
                                w-52
                                h-80
                                bg-cover
                                bg-center
                                rounded-md
                                shadow-sm
                                transition
                                duration-300
                            `}
                            style={{
                                backgroundImage: `url(${hobby.image})`,
                                left: `${offset}px`,
                                top: `${heightOffset[index]}px`,
                                zIndex,
                                transform: `rotate(${rotation[index]}deg) scale(${hoveredIndex === index ? 1.05 : 1})`,
                                transition: `all 0.3s ease`,
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                        </div>
                    )
                })}
            </div>

            {/* Text and Professional Interests */}
             <div className="flex flex-col items-start justify-start w-full max-w-6xl mt-10">
                {/* Text Section */}
                <div className="flex flex-col items-center text-neutral-900">
                    <h2 className={`text-2xl ${font_med.className}`}>More about me</h2>
                    <p className="mt-4 text-xl max-w-2xl">
                    My experience and interests surround data analysis & visualization, ML, digital health, and AI ethics.
                    </p>
                    <p className="mt-4 text-xl max-w-2xl">
                        Outside of work and school, I dance and teach ballet around Vancouver. 
                        Alongside that, I enjoy creative coding, photography, traveling, and 
                        continuing to experience new things.
                    </p>
                </div>

                {/* Professional Interests
                <div className="flex flex-row justify-between w-full max-w-6xl mt-8 self-start items-start">
                    <div className="flex flex-col text-neutral-900 lg:text-base text-sm">
                        <div className={`${font_med.className}`}>
                            Professional Interests
                        </div>
                        <div className="pt-3">Data analysis & visualization</div>
                        <div>Digital health</div>
                        <div>AI ethics</div>
                        <div>Machine learning</div>
                    </div>
                    <div className="flex flex-col text-neutral-900 lg:text-base text-sm">
                        <div className={`${font_med.className}`}>
                            Contact
                        </div>
                        <div className="flex flex-col pt-3">
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
                */}
            </div>
    </section>
    );
}

export default AboutCards;