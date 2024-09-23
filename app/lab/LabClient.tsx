'use client';

import { font_med } from "../fonts";

const LabClient = () => {
    return (
        <div className="flex flex-col lg:mx-80 mx-5 pt-24">
            <div className="lg:text-2xl text-neutral-900 text-base justify-center items-center">
                In the lab — experimentation done for fun and for projects, things I've learned on my own, and other extras.
            </div>
            <div className={`lg:mt-20 mt-10 lg:text-2xl text-base text-neutral-900 ${font_med.className}`}>
                Creative coding
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
            <div className={`lg:mt-20 mt-10 lg:text-2xl text-base text-neutral-900 ${font_med.className}`}>
                Airbnb clone
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
        </div>
    );
}

export default LabClient;