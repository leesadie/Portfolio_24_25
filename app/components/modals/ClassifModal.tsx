'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import useClassifModal from "../hooks/useClassifModal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

const ClassifModal = () => {
    const classifModal = useClassifModal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
                <Image 
                    src='/images/classif_1.svg'
                    alt="dashboard"
                    width={100}
                    height={100}
                    className="w-full h-1/2  object-contain justify-center items-center min-h-0 h-full transition"
                />
            </div>
            <div className="lg:mx-20 mx-5 lg:pt-10 pt-5">
                <div className="text-neutral-900 opacity-50 text-base">
                    Deep Learning
                </div>
                <div className={`text-netural-900 lg:text-lg text-base ${font_med.className}`}>
                    UBC MINT
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-900 mt-3 lg:text-lg text-sm">
                    As part of the UBC Multifaceted Innovations in Neurotechnology (MINT) design team,
                    I learnt the mathematical underpinnings of neural networks by building a multilayer
                    perceptron network with math and numpy. From there, I used convolutional neural networks
                    to classify brain tumor MR images with PyTorch.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/Brain-Tumor-Detection">
                        <div className="flex flex-row text-neutral-900 mt-2 text-base bg-gray-200 rounded-xl px-3 py-2 group-hover:bg-opacity-50 transition">
                            Github repo
                            <div className="text-neutral-900 group-hover:translate-x-1 transition">
                                <IoIosArrowRoundForward size={24}/>
                            </div>
                        </div>
                    </a>
                </div>
                <hr className="mt-3 mb-10"/>
            </div>
        </div>
    )

    return (
        <Modal 
            disabled={isLoading}
            isOpen={classifModal.isOpen}
            onClose={classifModal.onClose}
            body={bodyContent}
        />
    );
}

export default ClassifModal;