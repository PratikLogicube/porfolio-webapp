import React from 'react'
import { Spotlight } from '../ui/Spotlight'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import Image from 'next/image'
import CopyToClipboardButton from './CopyToClipboard'
import { exchangePlatforms, socialMedia } from "@/data";

const Hero = () => {
    return (
        <section className='pb-20 pt-32 flex w-full justify-between items-center' id='about'>
            <div id='header-content' className='flex-1'>
                <div>
                    <Spotlight className='-top-40 right-0 md:-right-[40rem] md:top-20 h-screen' fill='white' />
                    <Spotlight className='top-10 -right-[40rem] h-[40vh] w-[50vw]' fill='white' />
                    <Spotlight className='top-28 -right-[40rem] h-[40vh] w-[50vw]' fill='white' />
                </div>
                <div>
                    <Spotlight className='-top-40 right-0 md:-right-[70rem] md:top-20 h-screen' spotlightClassname='rotate-90 origin-center' fill='white' />
                    <Spotlight className='top-10 -right-[70rem] h-[40vh] w-[50vw]' spotlightClassname='rotate-90 origin-center' fill='white' />
                    <Spotlight className='top-28 -right-[70rem] h-[40vh] w-[40vw]' spotlightClassname='rotate-90 origin-center' fill='white' />
                </div>
                <div className="h-screen w-full dark:bg-[#006400] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_left,transparent_20%,white)]" />
                </div>
                <div className='flex justify-center relative my-20'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
                        <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words="The End of Dog, Fox, and Cat Coins. PepeVerse is Here to Rule." />
                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            Forget the pets of the past—PepeVerse is taking over the crypto jungle.
                        </p>
                        <CopyToClipboardButton content='somepasskeytocopy' />
                        <div className="mt-8">
                            <div className="icons-container flex items-center gap-3 lg:gap-6 px-5 py-3">
                                {socialMedia.map((profile) => (
                                    <div
                                        key={profile.id}
                                        className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 rounded-lg "
                                    >
                                        <img src={profile.img} alt={profile.img} width={64} height={64} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="icons-container flex items-center gap-3 lg:gap-6 px-5 py-3">
                                {exchangePlatforms.map((profile) => (
                                    <button key={profile.id} className="flex items-center gap-6 px-7 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                                        {profile.name}  <img src={profile.img} alt={profile.img} width={48} height={48} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-coin-img" className='relative flex-1 aspect-square'>
                <Image id='coin-img' alt='PepeVerse coin' src='/pepeverse-coin.png' fill />
            </div>
        </section>
    )
}

export default Hero