'use client';

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import use300Modal from "../hooks/use300Modal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

const C300Modal = () => {
    const c300Modal = use300Modal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div className="lg:mx-20 mx-5 lg:pt-10 pt-5">
                <div className="text-neutral-700 opacity-50 text-sm">
                    WRITING & DEVELOPMENT
                </div>
                <div className={`text-netural-700 text-base ${font_med.className}`}>
                    COGS 300 - Understanding and Designing Cognitive Systems
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-700 mt-3 lg:text-base tracking-tight text-sm">
                    This course focused on key theoretical and methodological issues within the design of cognitive systems. 
                    Responding to research in these issues was a major component of the course; see below for two of my responses. 
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="files/COGS300_RR1.pdf">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-1 group-hover:opacity-50 transition">
                            On Pinker (2007) - Heterogeneous Language Processing Systems
                            <div className="group-hover:translate-x-1 transition">
                                <IoIosArrowRoundForward size={24}className="text-indigo-700"/>
                            </div>
                        </div>
                    </a>
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="files/COGS300_RR3.pdf">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-1 group-hover:opacity-50 transition">
                            On Vallor and Bekey (2017) - Legal Models of AI and Privacy
                            <div className="group-hover:translate-x-1 transition">
                                <IoIosArrowRoundForward size={24} className="text-indigo-700"/>
                            </div>
                        </div>
                    </a>
                </div>
                <hr className="mt-3"/>
                <hr className="mt-12"/>
                <div className="text-neutral-700 mt-3 lg:text-base tracking-tight text-sm">
                    The course also consisted of labs to simulate concepts such as physical symbol systems, 
                    connectionism, and embodied cognition in Unity and C#. Our final project was a robot tournament
                    where we used Unity, ML-Agents, and Blender to implement a strategy for a learning robot 
                    to play the game; our group won first place!
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/COGS300_Final">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-1 group-hover:opacity-50 transition">
                            Github repo
                            <div className="group-hover:translate-x-1 transition">
                                <IoIosArrowRoundForward size={24} className="text-indigo-700"/>
                            </div>
                        </div>
                    </a>
                </div>
                <hr className="mt-3"/>
            </div>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={c300Modal.isOpen}
            onClose={c300Modal.onClose}
            body={bodyContent}
        />
    );
}

export default C300Modal;