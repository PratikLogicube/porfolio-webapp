import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";
import CopyToClipboardButton from "./CopyToClipboard";
import { exchangePlatforms, socialMedia } from "@/data";

const Hero = () => {
    return (
        <section
            className="w-full sm:pb-20 sm:pt-28 flex flex-col sm:flex-row justify-center  gap-5 items-center h-screen"
            id="about"
        >
            <div
                className=" h-[calc(100vh+320px)] sm:h-screen w-full dark:bg-[#006400] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_left,transparent_20%,white)]" />
            </div>
            <div id="header-content" className="flex-1 sm:flex-[0.5] lg:flex-1">
                {/* SpotLights */}
                {/* <div>
                    <Spotlight className='-top-40 right-0 md:-right-[40rem] md:top-20 h-screen' fill='white' />
                    <Spotlight className='top-10 -right-[40rem] h-[40vh] w-[50vw]' fill='white' />
                    <Spotlight className='top-28 -right-[40rem] h-[40vh] w-[50vw]' fill='white' />
                </div>
                <div>
                    <Spotlight className='-top-40 right-0 md:-right-[70rem] md:top-20 h-screen' spotlightClassname='rotate-90 origin-center' fill='white' />
                    <Spotlight className='top-10 -right-[70rem] h-[40vh] w-[50vw]' spotlightClassname='rotate-90 origin-center' fill='white' />
                    <Spotlight className='top-28 -right-[70rem] h-[40vh] w-[40vw]' spotlightClassname='rotate-90 origin-center' fill='white' />
                </div> */}

                <div className="flex  justify-center relative mt-20 mb-10 w-full px-3">
                    <div className=" w-full sm:max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center sm:items-start justify-center ">
                        <TextGenerateEffect
                            className="text-center sm:text-left text-3xl sm:text-[40px] md:text-5xl lg:text-5xl"
                            words="The End of Dog, Fox, and Cat Coins. PepeRama is Here to Rule."
                        />
                        <p className="text-center sm:text-left md:tracking-wider mb-4 text-lg md:text-lg lg:text-2xl">
                            Forget the pets of the past—PepeRama is taking over the crypto
                            jungle.
                        </p>
                        <CopyToClipboardButton content="somepasskeytocopy" />
                        <div className="mt-4 ">
                            <div className="icons-container flex flex-col sm:flex-row items-center gap-3 lg:gap-6 px-5 py-3 md:px-0 lg:px-0">
                                {exchangePlatforms.map((profile) => (
                                    <button
                                        key={profile.id}
                                        className="w-full  flex items-center justify-between gap-6 px-7 py-1 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
                                    >
                                        <p className="text-sm">{profile.name}</p>
                                        <div className="relative w-10 aspect-square">
                                            <Image src={profile.img} alt={profile.img} fill />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-coin-img" className="relative m-3 flex-1 aspect-square sm:h-3/4 lg:flex-1 lg:aspect-[9/16]">
                <Image id="coin-img" alt="peperama coin" src="/peperama.jpg" fill />
            </div>
        </section>
    );
};

export default Hero;
