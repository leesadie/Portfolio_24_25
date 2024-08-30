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


    return (
        <div className="flex flex-col mx-5 mt-5">
            <div className="text-base text-neutral-900 justify-center items-center">
                I’m Sadie Lee — currently studying cognitive science and data science at UBC. My experience and interests are within applications of data and technology for human health.
            </div>
            <div className={`flex flex-col pt-10 text-base ${font_bold.className}`}>
                Recent Work
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
                <div className={`text-base ${font_bold.className}`}>
                    Previous Experience
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
            <div className="flex flex-col pt-10">
                <div className={`text-base ${font_bold.className}`}>
                    Research
                </div>
                <hr className="mt-5 bg-neutral-300"/>
                <a target="_blank" rel="noopener noreferrer" href="files/AAAI_UC_Proposal.pdf">
                    <div className="text-sm pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer">
                        <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                            Topological Data Analysis and Interpretability of 3D-Convolutional Neural Networks
                        </div>
                        <div className="text-sm opacity-50 pb-2 group-hover:translate-x-2 ease-in duration-300 transition">
                            2024 AAAI Undergraduate Consortium
                        </div>
                    </div>
                </a>
                <hr className=""/>
                <a target="_blank" rel="noopener noreferrer" href="files/MIT_URTC_Final.pdf">
                    <div className="text-sm pt-2 group hover:bg-neutral-300 ease-in duration-300 transition cursor-pointer">
                        <div className="group-hover:translate-x-2 ease-in duration-300 transition">
                            Formalizing Ethical Design in Prostate Cancer Image Analysis: Preliminary Case Study
                        </div>
                        <div className="text-sm opacity-50 pb-2 group-hover:translate-x-2 ease-in duration-300 transition">
                            Work completed during internship at Mayo Clinic Platform
                        </div>
                    </div>
                </a>
                <hr className="pt-2 pb-10"/>
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

export default Hero_Sm;