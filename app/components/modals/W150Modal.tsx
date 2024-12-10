'use client';

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import use150Modal from "../hooks/use150Modal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

const W150Modal = () => {
    const w150Modal = use150Modal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div className="lg:mx-20 mx-5 lg:pt-10 pt-5">
                <div className="text-neutral-700 opacity-50 text-sm">
                    RESEARCH & WRITING
                </div>
                <div className={`text-netural-700 text-base ${font_med.className}`}>
                    WRDS 150 - Writing and Research in the Disciplines
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-700 mt-3 lg:text-base tracking-tight text-sm">
                    Each section of this course focused on a specific topic based on the professor's area of research where
                    we were tasked with understanding literature around the topic and writing a paper; 
                    my section focused on nostalgia and so my work explored the nostalgia trade in the Chinese diaspora of Canada.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="files/WRDS150_Final.pdf">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-1 group-hover:opacity-50 transition">
                            Read the paper
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
            isOpen={w150Modal.isOpen}
            onClose={w150Modal.onClose}
            body={bodyContent}
        />
    );
}

export default W150Modal;