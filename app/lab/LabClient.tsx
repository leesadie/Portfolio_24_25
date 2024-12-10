'use client';

import { font_bold } from "../fonts";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io"


const LabClient = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col lg:mx-80 mx-5 lg:pt-24 pt-10">
            <div className="lg:text-2xl text-neutral-700 text-base justify-center items-center">
                In the lab — experimentation done for fun and for projects, and things I've learned on my own.
            </div>
            <div className={`lg:mt-20 mt-10 text-base text-neutral-700 ${font_bold.className}`}>
                CREATIVE CODING
            </div>
            <div className="grid grid-cols-2 gap-3 mt-10">
                <div className="w-full lg:h-60 h-40 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/coordinates.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-40 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/flow.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Spherical coordinates - p5.js
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Flow fields - p5.js
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
                <div className="w-full lg:h-60 h-30 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/loading.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-30 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/typography.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-60 h-30 rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/generative.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Loading - Processing
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Typography - Processing
                </div>
                <div className="text-xs text-neutral-900 opacity-70 lg:text-base">
                    Generative - Processing
                </div>
            </div>
            <div className={`lg:mt-20 mt-10 text-base text-neutral-700 ${font_bold.className}`}>
                AIRBNB CLONE
            </div>
            <div className="flex flex-col gap-3 mt-10">
                <div className="w-full lg:h-full rounded-lg">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/airbnb.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-sm lg:text-base text-neutral-900 opacity-70 pb-20">
                    Followed a tutorial from @codewithantonio on YouTube to teach myself basic frontend and backend
                    for the Forestar project - NextJS 13, TypeScript, MongoDB, Prisma, NextAuth, Tailwind CSS 
                </div>
            </div>
            <div className="flex flex-row items-center justify-center pb-20 group gap-1 text-base text-neutral-900"
                onClick={() => router.push('/about')}>
               <div className="hover:opacity-50 transition cursor-pointer">
                    Back
                </div>
            </div>
        </div>
    );
}

export default LabClient;