'use client';

import React, { useCallback } from "react";
import { useState, useEffect } from "react";

import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    title?: string,
    body?: React.ReactElement;
    footer?: React.ReactElement;
    disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    body,
    footer,
    disabled,
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if(disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [disabled, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div
                className="
                justify-center
                items-center
                flex
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800/70
            "
            >
                <div
                    className="
                        relative
                        w-full
                        md:w-4/6
                        my-6
                        mx-auto
                        h-auto
                    "
                >
                    {/* CONTENT */}
                    <div
                        className={`
                            translate
                            duration-300
                            h-full
                            ${showModal ? 'translate-y-0' : 'translate-y-full'}
                            ${showModal ? 'opacity-100' : 'opacity-0'}
                         `}
                    >
                        <div
                            className="
                                translate
                                h-full
                                md:h-auto
                                border-0
                                rounded-sm
                                shadow-lg
                                relative
                                flex
                                flex-col
                                w-full
                                bg-white
                                outline-none
                                focus:outline-none
                            "
                        >
                            {/* BODY */}
                            <div className="relative flex-auto">
                                {body}
                            </div>
                            {/* FOOTER */}
                            <div className="flex flex-col p-6 justify-center items-center">
                                <button
                                    onClick={handleClose}
                                    className="
                                        pb-20
                                        pt-20
                                        border-0
                                        hover:opacity-50
                                        transition
                                        absolute
                                        text-sm
                                        text-neutral-700
                                    "
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;