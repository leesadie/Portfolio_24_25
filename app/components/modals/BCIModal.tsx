'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

import useBCIModal from "../hooks/useBCIModal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

const BCIModal = () => {
    const bciModal = useBCIModal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div>
                <Image 
                    src='/images/bci_1.svg'
                    alt="dashboard"
                    width={100}
                    height={100}
                    className="w-full object-contain justify-center items-center min-h-0 h-full transition"
                />
            </div>
            <div className="lg:mx-20 mx-5">
                <div className="flex flex-row items-center gap-1">
                    <div className="opacity-50">
                        <IoIosInformationCircleOutline />
                    </div>
                    <div className="text-neutral-900 opacity-50 lg:text-sm text-xs">
                        Image from Hramov, Maksimenko, & Pisarchik (2021) used in the literature review.
                    </div>
                </div>
                <div className="text-neutral-700 opacity-50 pt-10 text-sm">
                    HCI RESEARCH
                </div>
                <div className={`text-netural-700 text-base ${font_med.className}`}>
                    UBC MINT
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-700 mt-3 lg:text-base text-sm">
                    Another one of my roles at UBC Multifaceted Innovations in Neurotechnology (MINT) was to 
                    understand interactions between humans and brain computer interfaces (BCI), specifically, 
                    a reinforcement learning-based BCI.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="files/HCI_BCI_Lit_Review.pdf">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-2 group-hover:opacity-50 transition">
                            Read the lit review
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
            isOpen={bciModal.isOpen}
            onClose={bciModal.onClose}
            body={bodyContent}
        />
    );
}

export default BCIModal;