'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import useDashboardModal from "../hooks/useDashboardModal";
import Modal from "../Modal";
import { font_med, font_bold } from "@/app/fonts";

const DashboardModal = () => {
    const dashboardModal = useDashboardModal();
    const [isLoading, setIsLoading] = useState(false);

    const bodyContent = (
        <div className="flex flex-col">
            <div>
                <Image 
                    src='/images/dashboard_3.svg'
                    alt="dashboard"
                    width={100}
                    height={100}
                    className="w-full object-contain justify-center items-center min-h-0 h-full transition"
                />
            </div>
            <div className="lg:mx-20 mx-5 lg:pt-10 pt-5">
                <div className="text-neutral-700 opacity-50 text-sm">
                    VISUAL ANALYTICS
                </div>
                <div className={`text-netural-700 text-base ${font_med.className}`}>
                    Mayo Clinic Platform
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-700 mt-3 lg:text-base tracking-tight text-sm">
                    During my internship at Mayo Clinic Platform, I worked with the 
                    Market Intel and Business Intel teams to develop dashboards to geographically 
                    visualize potential client prospects using Power BI and DAX.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                        <div className="text-indigo-700 flex flex-row text-neutral-700 mt-2 text-base py-2 group-hover:opacity-50 transition">
                            Email me
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
            isOpen={dashboardModal.isOpen}
            onClose={dashboardModal.onClose}
            body={bodyContent}
        />
    );
}

export default DashboardModal;