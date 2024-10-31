"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'

const HomePage = () => {
    return (
        <section id="home" className="bg-[#f3eef8] sm:h-screen h-screen pt-2">
            <div className="flex flex-col text-center items-center justify-center pl-20 pr-20 animate-fadeIn animation-delay-2 mt-10 py-10 sm:py-20 md:py-40 md:h-full sm:h-full md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/images/my-porto-pict.png"
                        alt=""
                        width={325}
                        height={325}
                        className=""
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-2xl font-bold mt-6 md:mt-0 md:text-4xl text-[#1E1E1E] rubik">Explore various shade and variant with code</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl text-[#1E1E1E] rubik">
                        Hi, I&apos;m Najwa. Welcome to my personal website where I tell some of my expertises in web development.
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