'use client';

import { font_bold, font_med } from "../fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForestarClient = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col lg:mx-80 mx-5">
            <div className="flex flex-row justify-between">
                <div className={`lg:text-xl text-base text-neutral-900 ${font_med.className}`}>
                    Forestar Web App
                </div>
                <div className="lg:text-lg text-base text-neutral-900 opacity-50">
                    Summer 2023
                </div>
            </div>
            <div className="pt-5">
                <Image 
                    src='/images/forestar_2.svg'
                    alt="forestar"
                    width={100}
                    height={100}
                    className="w-full object-contain justify-center items-center rounded-xl min-h-0 h-full"
                />
            </div>
            <div className="lg:text-xl text-base text-neutral-900 pt-5">
            Forestar is an extension of a 2022 UBC Faculty of Forestry clinical trial that studied the health merits
            of forest bathing (森林浴), during which participants faced challenges with mobility, transportation,
            illness, and/or guidance.
            </div>
            <div className="lg:grid lg:grid-cols-5 flex flex-col pt-10 lg:gap-10 gap-5">
                <div className="flex flex-col col-span-3 text-neutral-900 lg:text-lg text-base">
                    <div className={`${font_bold.className}`}>
                        Key Points
                    </div>
                    <div className="pt-5">
                        The web app provides self-guided forest bathing to mitigate
                        some of these challenges and increase accessibility to the practice.
                    </div>
                    <div className="pt-5">
                        Questions that arose during development included,
                        1) How can we build an app to reduce distractions and 
                        2) How can other media be used to increase focus on the experience?
                    </div>
                    <div className="pt-5">
                        We used specific language to remind users of the goals and the environment, 
                        and incorporated location-based augmented reality to prompt focus on a specific 
                        sense at a given location along the route.
                    </div>
                </div>
                <div className="flex flex-col col-span-1 text-neutral-900 lg:text-lg text-base">
                    <div className={`${font_bold.className}`}>
                        Skills
                    </div>
                    <div className="pt-5">
                        Mobile-first design
                    </div>
                    <div>
                        Frontend dev
                    </div>
                    <div>
                        Backend dev
                    </div>
                </div>
                <div className="flex flex-col col-span-1 text-neutral-900 lg:text-lg text-base">
                    <div className={`${font_bold.className}`}>
                        Tools
                    </div>
                    <div className="pt-5">
                        React
                    </div>
                    <div>
                        Node.js
                    </div>
                    <div>
                        TypeScript
                    </div>
                    <div>
                        MongoDB
                    </div>
                    <div>
                        Tailwind CSS
                    </div>
                    <div>
                        Needle Engine
                    </div>
                    <div>
                        Unity
                    </div>
                </div>
            </div>
            <div
                className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    py-20
                    text-base
                    text-neutral-900
                    hover:underline
                    hover:underline-offset-4
                    hover:opacity-50
                    transition
                    cursor-pointer
                "
                onClick={() => router.push('/')}
            >
                Back
            </div>
        </div>
    );
}

export default ForestarClient;