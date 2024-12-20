'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

import { font_med } from "../fonts";

const AboutClient2 = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col lg:mx-72 justify-center items-center min-h-screen">
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-3">
                <div
                    className="
                        hover:scale-105 
                        ease-out 
                        duration-300 
                        transition
                        col-span-1
                        cursor-pointer
                    "
                    onClick={() => router.push('/lab')}
                >
                    <Image 
                        src='/images/about/code3.svg'
                        alt="code"
                        width={100}
                        height={100}
                        className="lg:w-full w-40 object-contain justify-center items-center rounded-lg min-h-0 h-full transition"
                    />
                </div>
                <div
                    className="
                        hover:scale-105 
                        ease-out 
                        duration-300 
                        transition
                        col-span-1
                    "
                >
                    <Image 
                        src='/images/about/juneau.svg'
                        alt="juneau"
                        width={100}
                        height={100}
                        className="lg:w-full w-40 object-contain justify-center items-center rounded-lg min-h-0 h-full transition"
                    />
                </div>
                <div
                    className="
                        hover:scale-105 
                        ease-out 
                        duration-300 
                        transition
                        col-span-1
                    "
                >
                    <Image 
                        src='/images/about/ballet.svg'
                        alt="ballet"
                        width={100}
                        height={100}
                        className="lg:w-full w-40 object-contain justify-center items-center rounded-lg min-h-0 h-full transition"
                    />
                </div>
                <div
                    className="
                        hover:scale-105 
                        ease-out 
                        duration-300 
                        transition
                        col-span-1
                    "
                >
                    <Image 
                        src='/images/about/ocean.svg'
                        alt="ocean"
                        width={100}
                        height={100}
                        className="lg:w-full w-40 object-contain justify-center items-center rounded-lg min-h-0 h-full transition"
                    />
                </div>
                <div
                    className="
                        hover:scale-105 
                        ease-out 
                        duration-300 
                        transition
                        col-span-1
                    "
                >
                    <Image 
                        src='/images/about/boston.svg'
                        alt="boston"
                        width={100}
                        height={100}
                        className="lg:w-full w-40 object-contain justify-center items-center rounded-lg min-h-0 h-full transition"
                    />
                </div>
                <div
                    className="
                        hover:scale-105 
                        ease-out 
                        duration-300 
                        transition
                        col-span-1
                    "
                >
                    <Image 
                        src='/images/about/tofino2.svg'
                        alt="code"
                        width={100}
                        height={100}
                        className="lg:w-full w-40 object-contain justify-center items-center rounded-lg min-h-0 h-full transition"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:mt-12 mt-8 lg:mx-28 mx-8">
                <div className={`text-neutral-900 lg:text-2xl text-xl ${font_med.className}`}>
                    More about me.
                </div>
                <div className="text-neutral-900 lg:text-xl pt-5 pb-5">
                    Outside of work and school, I teach ballet around Vancouver. 
                    Alongside that, I enjoy traveling, photography, and continuing to learn 
                    and experience new things.
                </div>
            </div>
        </div>
    );
}

export default AboutClient2;