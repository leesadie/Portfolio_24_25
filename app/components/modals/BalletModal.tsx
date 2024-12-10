'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

import useBalletModal from "../hooks/useBalletModal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

const BalletModal = () => {
    const balletModal = useBalletModal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
                <Image 
                    src='/images/ballet_1.svg'
                    alt="dashboard"
                    width={100}
                    height={100}
                    className="w-full h-1/2 object-contain justify-center items-center min-h-0 h-full transition"
                />
            </div>
            <div className="lg:mx-20 mx-5 lg:pt-10 pt-5">
                <div className="text-neutral-700 opacity-50 pt-5 text-sm">
                    DESIGN & DEVELOPMENT
                </div>
                <div className={`text-netural-900 text-base ${font_med.className}`}>
                    UBC Ballet
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-700 mt-3 lg:text-base text-sm">
                    Alongside teaching advanced ballet classes and my role as VP External of UBC Ballet,
                    I designed and developed a website to match our overall rebranding for the 24-25 school year.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="https://ubcballet.vercel.app/">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-2 group-hover:opacity-50 transition">
                            Visit the website
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
            isOpen={balletModal.isOpen}
            onClose={balletModal.onClose}
            body={bodyContent}
        />
    );
}

export default BalletModal;