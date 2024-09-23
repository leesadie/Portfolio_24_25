'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import useDashboardModal from "../hooks/useDashboardModal";
import Modal from "../Modal";
import { font_med } from "@/app/fonts";

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
                <div className="text-neutral-900 opacity-50 text-base">
                    Visual Analytics
                </div>
                <div className={`text-netural-900 lg:text-lg text-base ${font_med.className}`}>
                    Mayo Clinic Platform
                </div>
                <hr className="mt-3"/>
                <div className="text-neutral-900 mt-3 lg:text-lg text-sm">
                    During my internship at Mayo Clinic Platform, I worked with the 
                    Market Intel and Business Intel teams to develop dashboards with 
                    Power BI and DAX to perform calculations, integrate interactivity, 
                    and visualize data.
                </div>
                <hr className="mt-3"/>
                <div className="flex flex-row gap-1 items-center group cursor-pointer">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                        <div className="flex flex-row text-neutral-900 mt-2 text-base bg-gray-200 rounded-xl px-3 py-2 group-hover:bg-opacity-50 transition">
                            Email me
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
            isOpen={dashboardModal.isOpen}
            onClose={dashboardModal.onClose}
            body={bodyContent}
        />
    );
}

export default DashboardModal;