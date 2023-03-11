"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'

const HomePage = () => {
    return (
        <section id="home" className="bg-[#202635] sm:h-screen h-screen pt-2">
            <div className="flex flex-col text-center items-center justify-center pl-20 pr-20 animate-fadeIn animation-delay-2 mt-10 py-10 sm:py-20 md:py-40 md:h-full sm:h-full md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/images/logonajwa.png"
                        alt=""
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-2xl font-bold mt-6 md:mt-0 md:text-4xl text-[#D9D9D9]">Hello! I am Najwa, a Software Engineering student.</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl text-[#D9D9D9]">
                        My name is <span>Najwa Tahir.</span> I am a student at SMKN 1 Denpasar.
                    </p>
                    <a href="#about">
                        <button className="home-button">Get to know me</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HomePage
