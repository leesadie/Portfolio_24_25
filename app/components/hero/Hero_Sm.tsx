'use client';

import { font_bold } from "@/app/fonts";
import Image from "next/image";
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
import C303Modal from "../modals/C303Modal";
import use303Modal from "../hooks/use303Modal";
import C300Modal from "../modals/C300Modal";
import use300Modal from "../hooks/use300Modal";
import I200Modal from "../modals/I200Modal";
import use200Modal from "../hooks/use200Modal";
import W150Modal from "../modals/W150Modal";
import use150Modal from "../hooks/use150Modal";

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero_Sm = () => {
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

    const c303Modal = use303Modal();
    const on303 = useCallback(() => {
        c303Modal.onOpen();
    }, [c303Modal])

    const c300Modal = use300Modal();
    const on300 = useCallback(() => {
        c300Modal.onOpen();
    }, [c300Modal])

    const i200Modal = use200Modal();
    const on200 = useCallback(() => {
        i200Modal.onOpen();
    }, [i200Modal])

    const w150Modal = use150Modal();
    const on150 = useCallback(() => {
        w150Modal.onOpen();
    }, [w150Modal])

    return (
        <div className="flex flex-col mx-5 pt-5">
            <div 
                className="
                    flex 
                    flex-col
                    justify-center 
                    items-center"
            >
                {/* 
                <Image 
                    src='/images/about1.svg'
                    alt="me"
                    height={100}
                    width={100}
                    className="rounded-full"
                />
                */}
            </div>
            <div
                className="
                    text-neutral-700
                "
            >
                Hi, I'm Sadie, I'm currently studying cognitive science and data science at UBC. 
                My experience and interests are within ethical applications of data and technology for human health.
            </div>
            <div
                className="
                    text-neutral-700
                    pt-5
                "
            >
                I've previously worked at Mayo Clinic Platform and BC Children's Hospital Research Institute
                in data analysis, ML, digital health, and AI ethics.
            </div>
            <div className="flex flex-row justify-start pt-5 gap-3">
                <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                    <div className="text-neutral-900 opacity-50 hover:opacity-30 transition">
                        <MdEmail size={20}/>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leesadie/">
                    <div className="text-neutral-900 opacity-50 hover:opacity-30 transition">
                        <FaLinkedin size={20}/>
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie">
                    <div className="text-neutral-900 opacity-50 hover:opacity-30 transition">
                        <FaGithub size={20}/>
                    </div>
                </a>
            </div>
            <div className={`flex flex-col pt-10 text-sm ${font_bold.className}`}>
                RECENT WORK
            </div>
            <div
                className="
                    pt-5
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
                        className="w-full object-contain justify-center items-center rounded-lg min-h-0 h-full transition"
                    />
                    <div className="flex flex-row justify-between text-sm pt-3">
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
                        className="w-full object-contain justify-center items-center rounded-xl min-h-0 h-full transition"
                    />
                    <div className="flex flex-row justify-between text-sm pt-3">
                        <div className="">
                            Mayo Clinic Platform Imaging
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
                        className="w-full object-contain justify-center items-center rounded-xl min-h-0 h-full transition"
                    />
                    <div className="flex flex-row justify-between text-sm pt-3">
                        <div className="">
                            T1D REACHOUT Time in Range
                        </div>
                        <div className="opacity-50">
                            Data Analysis
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-10">
                <div className={`text-sm ${font_bold.className}`}>
                    PRIOR WORK
                </div>
                <hr className="bg-neutral-300 mt-5"/>
                <div 
                    className="text-sm pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer"
                    onClick={() => router.push('/forestar')}
                >
                    <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                        Forestar Web App
                    </div>
                    <div className="text-sm flex flex-row justify-between opacity-50">
                        <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                            Full Stack Development
                        </div>
                        <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                            Emerging Media Lab
                        </div>
                    </div>
                </div>
                <hr className="bg-neutral-300"/>
                <div 
                    className="text-sm pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer"
                    onClick={onClassif}
                >
                    <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                        Brain Tumor Classification
                    </div>
                    <div className="text-sm flex flex-row justify-between opacity-50">
                        <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                            Deep Learning
                        </div>
                        <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                            UBC MINT
                        </div>
                    </div>
                </div>
                <hr className="bg-neutral-300"/>
                <div 
                    className="text-sm pt-2 group hover:bg-neutral-300 transition cursor-pointer"
                    onClick={onBCI}
                >
                    <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                        HCI for Brain Computer Interfaces
                    </div>
                    <div className="text-sm flex flex-row justify-between opacity-50">
                        <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                            HCI Research
                        </div>
                        <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                            UBC MINT
                        </div>
                    </div>
                </div>
                <hr className="bg-neutral-300"/>
                <div 
                    className="text-sm pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer"
                    onClick={onBallet}
                >
                    <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                        UBC Ballet Website
                    </div>
                    <div className="text-sm flex flex-row justify-between opacity-50">
                        <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                            Design & Development
                        </div>
                        <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                            UBC Ballet
                        </div>
                    </div>
                </div>
                <hr className="bg-neutral-300"/>
            </div>
            <div className="flex flex-col pt-5">
                <div className={`text-sm ${font_bold.className}`}>
                    RESEARCH
                </div>
                <hr className="mt-5 bg-neutral-300"/>
                <a target="_blank" rel="noopener noreferrer" href="files/AAAI_UC_Proposal.pdf">
                    <div className="text-sm pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer">
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
                    <div className="text-sm pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer">
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
            <div className="flex flex-col pt-5">
                    <div className={`row-span-1 text-sm text-neutral-700 ${font_bold.className}`}>
                        COURSEWORK
                    </div>
                    <hr className="bg-neutral-300 mt-5"/>
                    <div 
                        className="text-sm pt-2 group hover:bg-neutral-200 ease-in duration-300 transition cursor-pointer"
                        onClick={on303}
                    >
                        <div className="text-sm text-neutral-700 group-hover:translate-x-2 ease-in duration-300 transition">
                            Adaptive BI Report
                        </div>
                        <div className="text-neutral-700 text-sm flex flex-row justify-between opacity-50">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Design & Development
                            </div>
                            <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                                COGS 303
                            </div>
                        </div>
                    </div>
                    <hr className="bg-neutral-300"/>
                    <div 
                        className="text-sm pt-2 group hover:bg-neutral-200 ease-in duration-300 transition cursor-pointer"
                        onClick={on300}
                    >
                        <div className="text-sm text-neutral-700 group-hover:translate-x-2 ease-in duration-300 transition">
                            Theory and Design of Cognitive Systems
                        </div>
                        <div className="text-sm text-neutral-700 flex flex-row justify-between opacity-50">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Writing & Development
                            </div>
                            <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                                COGS 300
                            </div>
                        </div>
                    </div>
                    <hr className="bg-neutral-300"/>
                    <div 
                        className="text-sm text-neutral-700 pt-2 group hover:bg-neutral-200 transition cursor-pointer"
                        onClick={on200}
                    >
                        <div className="text-sm group-hover:translate-x-2 ease-in duration-300 transition">
                            A Map of Apple Health
                        </div>
                        <div className="text-sm flex flex-row justify-between opacity-50">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Research & Writing
                            </div>
                            <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                                INFO 200
                            </div>
                        </div>
                    </div>
                    <hr className="bg-neutral-200"/>
                    <div 
                        className="text-sm text-neutral-700 pt-2 group hover:bg-neutral-200 ease-in duration-300 transition cursor-pointer"
                        onClick={on150}
                    >
                        <div className="text-sm group-hover:translate-x-2 ease-in duration-300 transition">
                            Nostalgia in Diaspora Economics
                        </div>
                        <div className="text-sm flex flex-row justify-between opacity-50">
                            <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                                Research & Writing
                            </div>
                            <div className="pb-2 group-hover:-translate-x-2 ease-in duration-300 transition">
                                WRDS 150
                            </div>
                        </div>
                    </div>
                    <hr className="pb-10"/>
                </div>
            <div>
                <DashboardModal />
                <ImagingModal />
                <ClassifModal />
                <BCIModal />
                <BalletModal />
                <C303Modal />
                <C300Modal />
                <I200Modal />
                <W150Modal />
            </div>
        </div>
    );
}

export default Hero_Sm;