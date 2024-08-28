'use client';

import { CiFaceSmile } from "react-icons/ci";
import Container from "../Container";

const Footer = () => {
    return (
        <div className="w-full z-10">
            <div className="pb-10">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-center
                            text-sm
                            text-neutral-900
                            opacity-50
                            gap-1
                        "
                    >
                        <div>
                            Thanks for visiting
                        </div>
                        <CiFaceSmile />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Footer;