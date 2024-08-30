'use client';

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

import useDashboardModal from "../hooks/useDashboardModal";
import Modal from "../Modal";

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
                <div className="text-netural-900 lg:text-xl pt-1 text-base">
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
                        <div className="text-indigo-700 lg:text-lg text-base mt-3 group-hover:underline group-hover:underline-offset-4 group-hover:opacity-50 transition">
                            Email me
                        </div>
                    </a>
                    <div className="mt-3 text-indigo-700 group-hover:opacity-50 group-hover:translate-x-1 transition">
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
            isOpen={dashboardModal.isOpen}
            onClose={dashboardModal.onClose}
            body={bodyContent}
        />
    );
}

export default DashboardModal;