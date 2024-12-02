'use client';

import { font_med } from "@/app/fonts";
import Image from "next/image";

const AboutCardsSm: React.FC = () => {

    return (
        <section className="flex flex-col items-center mb-12">
            <Image 
                src='/images/me.svg'
                alt="me"
                height={100}
                width={100}
                className="rounded-full mt-20"
            />
            <div className="flex flex-col mt-5">
                {/* Text Section */}
                <div className="flex flex-col items-center text-neutral-900 mx-5">
                    <h2 className={`text-xl ${font_med.className}`}>More about me</h2>
                    <p className="mt-4">
                    My experience and interests surround data analysis & visualization, ML, digital health, and AI ethics.
                    </p>
                    <p className="mt-4">
                        Outside of work and school, I dance and teach ballet around Vancouver. 
                        Alongside that, I enjoy creative coding, photography, traveling, and 
                        continuing to experience new things.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutCardsSm;