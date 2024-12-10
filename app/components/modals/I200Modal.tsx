'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import use200Modal from "../hooks/use200Modal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

const I200Modal = () => {
    const i200Modal = use200Modal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div>
                <Image 
                    src='/images/info200.svg'
                    alt="info200"
                    width={100}
                    height={100}
                    className="w-full object-contain justify-center items-center min-h-0 h-full transition"
                />
            </div>
            <div className="lg:mx-20 mx-5 lg:pt-10 pt-5">
                <div className="text-neutral-700 opacity-50 text-sm">
                    RESEARCH & WRITING
                </div>
                <div className={`text-netural-700 text-base ${font_med.className}`}>
                    INFO 200 - Foundations of Informatics
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-700 mt-3 lg:text-base tracking-tight text-sm">
                    For the course project, we were tasked with reverse engineering an information system and 
                    chose to focus on the Apple Health system within the Apple Watch Series 9 to explore its technical,
                    sociopolitical, and environmental aspects.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="files/Map_of_Apple_Health.pdf">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-2 group-hover:opacity-50 transition">
                            Read the report
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
            isOpen={i200Modal.isOpen}
            onClose={i200Modal.onClose}
            body={bodyContent}
        />
    );
}

export default I200Modal;