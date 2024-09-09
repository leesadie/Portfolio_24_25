'use client';

import Container from "../components/Container";
import { font_bold } from "../fonts";
import { font_med } from "../fonts";

import { TfiEmail } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";

import ImageStack from "../components/about/ImageStack";

const AboutClient = () => {
    return (
        <Container>
            <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 flex flex-col justify-center items-center justify-center lg:mx-40 mx-5 lg:pt-20 pt-10">
                <div className="flex flex-col justify-start text-neutral-900">

                    <div className="lg:text-2xl text-base">
                        I'm currently a student at the University of British Columbia studying cognitive science and data science with experience in applications of data and technology for human health.
                    </div>
                    <div className="lg:text-2xl text-base lg:pt-10 pt-5">
                        Outside of work and school, I dance and teach ballet around Vancouver. Alongside that, I enjoy photography, traveling, reading, and continuing to learn new things. 
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 pt-10">
                        <div className="flex flex-col justify-start text-neutral-900 lg:text-base text-sm">
                            <div className={`${font_med.className}`}>
                                Professional Interests
                            </div>
                            <div className="pt-5">
                                Digital health
                            </div>
                            <div>
                                Medical data analysis
                            </div>
                            <div>
                                Visual analytics
                            </div>
                            <div>
                                Human-AI interaction
                            </div>
                            <div>
                                Machine learning
                            </div>
                        </div>
                        <div className="flex flex-col justify-start text-neutral-900 lg:text-base text-sm">
                            <div className={`${font_med.className}`}>
                                Contact
                            </div>
                            <div className="flex flex-row gap-2 pt-5 group">
                                <div className="pt-1 group-hover:opacity-70">
                                    <TfiEmail />
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="mailto:leesadie025@gmail.com">
                                    <div className="group-hover:underline group-hover:underline-offset-4 group-hover:opacity-70 transition cursor-pointer">
                                        leesadie025@gmail.com
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-row gap-2 group">
                                <div className="pt-1 group-hover:opacity-70">
                                    <FaLinkedinIn />
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leesadie/">
                                    <div className="group-hover:underline group-hover:underline-offset-4 group-hover:opacity-70 transition cursor-pointer">
                                        @leesadie
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-row gap-2 group">
                                <div className="pt-1 group-hover:opacity-70">
                                    <FaGithub />
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie">
                                    <div className="group-hover:underline group-hover:underline-offset-4 group-hover:opacity-70 transition cursor-pointer">
                                        @leesadie
                                    </div> 
                                </a>
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="files/Sadie Lee_Resume.pdf">
                                <div className="pt-6 pb-20 hover:underline hover:underline-offset-4 hover:opacity-70 transition cursor-pointer">
                                    View my resume
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:ml-24 justify-center items-center">
                    <div>
                        <ImageStack />
                    </div>
                    <div className="pt-10 text-neutral-900">
                        <IoIosArrowRoundUp />
                    </div>
                    <div className="text-sm text-neutral-900">
                        Click on image
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutClient;