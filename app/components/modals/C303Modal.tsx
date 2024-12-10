'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import use303Modal from "../hooks/use303Modal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

const C303Modal = () => {
    const c303modal = use303Modal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div>
                <Image 
                    src='/images/cogs303_2.svg'
                    alt="cogs303"
                    width={100}
                    height={100}
                    className="w-full object-contain justify-center items-center min-h-0 h-full transition"
                />
            </div>
            <div className="lg:mx-20 mx-5 lg:pt-10 pt-5">
                <div className="text-neutral-700 opacity-50 text-sm">
                    DESIGN & DEVELOPMENT
                </div>
                <div className={`text-netural-700 text-base ${font_med.className}`}>
                    COGS 303 - Research Methods in Cognitive Systems
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-700 mt-3 lg:text-base tracking-tight text-sm">
                    This course focused on research in adaptive systems. For the course project, we chose to
                    implement a prototype for a web-based application that tailors information presentation based on a 
                    user's functional area with simple conditional rules to aid business intelligence. 
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="files/COGS303_Final.pdf">
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
            isOpen={c303modal.isOpen}
            onClose={c303modal.onClose}
            body={bodyContent}
        />
    );
}

export default C303Modal;