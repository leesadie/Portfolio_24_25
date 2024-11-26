'use client';

import Image from "next/image";
import { font_bold, font_med } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import DashboardModal from "../modals/DashboardModal";
import useDashboardModal from "../hooks/useDashboardModal";
import ImagingModal from "../modals/ImagingModal";
import useImagingModal from "../hooks/useImagingModal";
import ClassifModal from "../modals/ClassifModal";
import useClassifModal from "../hooks/useClassifModal";
import BCIModal from "../modals/BCIModal";
import useBCIModal from "../hooks/useBCIModal";
import BalletModal from "../modals/BalletModal";
import useBalletModal from "../hooks/useBalletModal";

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io"

const Hero = () => {
    const router = useRouter();

    const dashboardModal = useDashboardModal();
    const OnDashboard = useCallback(() => {
        dashboardModal.onOpen();
    }, [dashboardModal])

    const imagingModal = useImagingModal();
    const onImaging = useCallback(() => {
        imagingModal.onOpen();
    }, [imagingModal])

    const classifModal = useClassifModal();
    const onClassif = useCallback(() => {
        classifModal.onOpen();
    }, [classifModal])

    const bciModal = useBCIModal();
    const onBCI = useCallback(() => {
        bciModal.onOpen();
    }, [bciModal])

    const balletModal = useBalletModal();
    const onBallet = useCallback(() => {
        balletModal.onOpen();
    }, [balletModal])

    return (
        <div className="flex flex-col mx-80">
            <div 
                className="
                    flex 
                    flex-col
                    justify-center 
                    items-center
                    pt-24"
            >
                <Image 
                    src='/images/me.svg'
                    alt="me"
                    height={100}
                    width={100}
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-row justify-center items-center pt-10 gap-5">
                <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                    <div className="text-neutral-900 opacity-50 hover:opacity-30 transition">
                        <MdEmail size={24}/>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leesadie/">
                    <div className="text-neutral-900 opacity-50 hover:opacity-30 transition">
                        <FaLinkedin size={24}/>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie">
                    <div className="text-neutral-900 opacity-50 hover:opacity-30 transition">
                        <FaGithub size={24}/>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="files/Sadie_Lee_Resume2.pdf">
                    <div className="text-neutral-900 opacity-50 hover:opacity-30 transition">
                        <IoDocumentTextSharp size={24}/>
                    </div>
                </a>
            </div>
            <div
                className="
                    lg:text-2xl
                    lg:pt-20
                    text-lg
                    tracking-tight
                    text-neutral-700
                    justify-center
                    items-center
                    mx-20
                "
            >
                Hi, I'm Sadie. I study cognitive science and data science at UBC, and work within 
                applications of data & technology for human health.
            </div>
            <div
                className="
                    lg:text-2xl
                    lg:pt-10
                    text-lg
                    tracking-tight
                    text-neutral-700
                    justify-center
                    items-center
                    mx-20
                "
            >
                My experience and interests surround data analysis & visualization, digital health, and AI safety.
            </div>
            <div className={`flex flex-col pt-20 text-base text-neutral-700 ${font_bold.className}`}>
                RECENT WORK
            </div>
            <div
                className="
                    pt-10
                    cursor-pointer
                    group
                "
            >
                <div 
                    className="flex flex-col group-hover:scale-105 ease-out duration-300 transition"
                    onClick={OnDashboard}
                >
                    <Image 
                        src='/images/mcp_dashboard2.svg'
                        alt="dashboard"
                        width={100}
                        height={100}
                        className="w-full object-contain justify-center items-center rounded-2xl min-h-0 h-full transition"
                    />
                    <div className="flex flex-row justify-between text-neutral-700 text-base pt-3 tracking-tight">
                        <div className="">
                            Mayo Clinic Platform Market Intelligence
                        </div>
                        <div className="opacity-50">
                            Visual Analytics
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="
                    pt-10
                    cursor-pointer
                    group
                "
            >
                <div 
                    className="flex flex-col group-hover:scale-105 ease-out duration-300 transition"
                    onClick={onImaging}
                >
                    <Image 
                        src='/images/mcp_imaging2.svg'
                        alt="dashboard"
                        width={100}
                        height={100}
                        className="w-full object-contain justify-center items-center rounded-2xl min-h-0 h-full transition"
                    />
                    <div className="flex flex-row justify-between text-neutral-700 text-base pt-3 tracking-tight">
                        <div className="">
                            Mayo Clinic Platform Imaging Process
                        </div>
                        <div className="opacity-50">
                            Medical Image Analysis
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="
                    pt-10
                    cursor-pointer
                    group
                "
            >
                <div 
                    className="flex flex-col group-hover:scale-105 ease-out duration-300 transition"
                    onClick={() => router.push('/reachout')}
                >
                    <Image 
                        src='/images/tir_2.svg'
                        alt="dashboard"
                        width={100}
                        height={100}
                        className="w-full object-contain justify-center items-center rounded-2xl min-h-0 h-full transition"
                    />
                    <div className="flex flex-row justify-between text-neutral-700 text-base tracking-tight pt-3">
                        <div className="">
                            T1D REACHOUT Time in Range
                        </div>
                        <div className="opacity-50">
                            Data Analysis & Visualization
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-1 pb-20 items-center">
                <div className="col-span-1 pt-20">
                    <div className={`row-span-1 text-base text-neutral-700 ${font_bold.className}`}>
                        PREVIOUS PROJECTS
                    </div>
                    <hr className="bg-neutral-300 mt-5 mr-5"/>
                    <div 
                        className="text-base mr-5 pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer"
                        onClick={() => router.push('/forestar')}
                    >
                        <div className="text-neutral-700 group-hover:translate-x-2 ease-in duration-300 transition">
                            Forestar Web App
                        </div>
                        <div className="text-neutral-700 text-base flex flex-row justify-between mr-5 opacity-50">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Full Stack Development
                            </div>
                            <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                                Emerging Media Lab
                            </div>
                        </div>
                    </div>
                    <hr className="bg-neutral-300 mr-5"/>
                    <div 
                        className="text-base pt-2 mr-5 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer"
                        onClick={onClassif}
                    >
                        <div className="text-neutral-700 group-hover:translate-x-2 ease-in duration-300 transition">
                            Brain Tumor Classification
                        </div>
                        <div className="text-base text-neutral-700 flex flex-row justify-between mr-5 opacity-50">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Deep Learning
                            </div>
                            <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                                UBC MINT
                            </div>
                        </div>
                    </div>
                    <hr className="bg-neutral-300 mr-5"/>
                    <div 
                        className="text-base text-neutral-700 mr-5 pt-2 group hover:bg-neutral-300 transition cursor-pointer"
                        onClick={onBCI}
                    >
                        <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                            HCI for Brain Computer Interfaces
                        </div>
                        <div className="text-base flex flex-row justify-between mr-5 opacity-50">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                HCI Research
                            </div>
                            <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                                UBC MINT
                            </div>
                        </div>
                    </div>
                    <hr className="bg-neutral-300 mr-5"/>
                    <div 
                        className="text-base text-neutral-700 pt-2 mr-5 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer"
                        onClick={onBallet}
                    >
                        <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                            UBC Ballet Website
                        </div>
                        <div className="text-base flex flex-row justify-between mr-5 opacity-50">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Design & Development
                            </div>
                            <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                                UBC Ballet
                            </div>
                        </div>
                    </div>
                    <hr className="bg-neutral-300 mr-5"/>
                </div>
                <div className="col-span-1">
                    <div className={`row-span-1 text-base ${font_bold.className}`}>
                        RESEARCH
                    </div>
                    <hr className="mt-5 bg-neutral-300"/>
                    <a target="_blank" rel="noopener noreferrer" href="files/AAAI_UC_Proposal.pdf">
                        <div className="text-base text-neutral-700 pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Topological Data Analysis and Interpretability of 3D-Convolutional Neural Networks
                            </div>
                            <div className="text-sm opacity-50 pb-2 group-hover:translate-x-2 ease-in duration-300 transition">
                               Acceptance - 2024 AAAI Undergraduate Consortium
                            </div>
                        </div>
                    </a>
                    <hr className=""/>
                    <a target="_blank" rel="noopener noreferrer" href="files/URTC2024Camera.pdf">
                        <div className="text-base text-neutral-700 pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Formalizing Ethical Design in Prostate Cancer Image Analysis: Preliminary Case Study
                            </div>
                            <div className="text-sm opacity-50 pb-2 group-hover:translate-x-2 ease-in duration-300 transition">
                                Acceptance - 2024 IEEE MIT URTC
                            </div>
                        </div>
                    </a>
                    <hr className="pt-2"/>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center mb-20 group gap-1 text-base text-neutral-500"
                onClick={() => router.push('/lab')}>
               <div className="group-hover:text-black group-hover:font-bold group-hover:opacity-100 group-hover:underline group-hover:underline-offset-8 transition cursor-pointer">
                    Go exploring
                </div> 
                <div className="group-hover:text-neutral-900 group-hover:font-bold group-hover:opacity-100 group-hover:translate-x-1 transition cursor-pointer">
                    <IoIosArrowRoundForward size={24}/>
                </div>
            </div>
            <div>
                <DashboardModal />
                <ImagingModal />
                <ClassifModal />
                <BCIModal />
                <BalletModal />
            </div>
        </div>
    );
}

export default Hero;