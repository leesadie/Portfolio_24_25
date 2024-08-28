'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

import useImagingModal from "../hooks/useImagingModal";
import Modal from "../Modal";

const ImagingModal = () => {
    const imagingModal = useImagingModal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
                <Image 
                    src='/images/mcp_imaging_4.svg'
                    alt="dashboard"
                    width={100}
                    height={100}
                    className="w-full h-1/2  object-contain justify-center items-center min-h-0 h-full transition"
                />
            </div>
            <div className="lg:mx-10 mx-5 lg:pt-10 pt-5">
                <div className="text-neutral-900 opacity-50 pt-5 lg:text-lg text-base">
                    Medical Image Analysis
                </div>
                <div className="text-netural-900 lg:text-lg text-base">
                    Mayo Clinic Platform
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-900 mt-3 lg:text-lg text-sm">
                    During my internship at Mayo Clinic Platform, I worked with the 
                    Accelerate team to estsablish a process for health tech startups to use
                    imaging modality data. I developed a use case with prostate MR images and 
                    defined a cohort, annotated potential abnormalities, built models, and
                    documented known issues.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                        <div className="text-indigo-700 lg:text-lg text-base mt-3 group-hover:underline group-hover:underline-offset-4 group-hover:opacity-50 transition">
                            Email me
                        </div>
                    </a>
                    <div className="mt-3 group-hover:opacity-50 group-hover:translate-x-1 transition">
                        <IoIosArrowRoundForward size={24}/>
                    </div>
                </div>
                <hr className="mt-3 mb-10"/>
            </div>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={imagingModal.isOpen}
            onClose={imagingModal.onClose}
            body={bodyContent}
        />
    );
}

export default ImagingModal;