import React from "react"
import Image from "next/image"

const abilities = [
    
    { ability: "HTML" },
    { ability: "CSS" },
    { ability: "PHP" },
    { ability: "JavaScript" },
    { ability: "Tailwind CSS" },
    { ability: "Think Creative" },
    { ability: "Public Speaking" },
    { ability: "Problem Solving" },

]

const AboutPage = () => {
    return (
        <section id="about" className="pt-5 mt-0 pb-6 bg-[#EDEDED]">
            <div className="md:pt-5 md:pb-5 p-24">
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:text-center text-[#1E1E1E] font-['Concert One']">
                            ABOUT ME
                        </h1>
                        <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                        <p className="text-[#1E1E1E] mb:text-lg text-base">
                            My name is <span>Najwa Tahir</span>, you can call me <span>Najwa</span> for short. I am a 2nd year Vocational High School student majoring in Software Engineering at SMKN 1 Denpasar. Currently, I am an intern at Taksu Tech.
                        </p>
                        <br />
                        <p>
                            I start coding on the first year of Vocational High School. I like problem solving and logic things, so that was the reason I choosed Software Engineering major. My dream is to be a Software Engineer.

                        </p>
                        <br />
                        <p className="mb-10">
                            I am a very curious person. I love to learning new things everyday, especially in improving my coding skill. I always try to trust every single process I make.
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-center">
                        <h1 className="text-2xl md:text-4xl font-bold mb-6">SKILLS & ABILITIES</h1>
                        <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start items-center md:pl-8">
                            {abilities.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="skill-box"
                                    >
                                        {item.ability}
                                    </p>
                                )
                            })}

                        </div>
                    </div>
                    <div className="text-center md:w-1/2 md:text-center">
                        <h1 className="text-2xl md:text-4xl font-bold mb-6">EDUCATION JOURNEY</h1>
                        <hr className="w-12 h-1 mx-auto my-4 bg-[#B19DC5] border-0 rounded"></hr>
                        <div className="edu-box">
                            <p className="font-bold text-2xl">MI Negeri Denpasar</p>
                            <p>2012-2018</p>
                            <hr className="w-1 h-14 mx-auto my-4 bg-[#DDD1E9] border-0"></hr>
                            <p className="font-bold md:text-2xl text-xl">MTs Hidayatullah Denpasar</p>
                            <p>2018-2021</p>
                            <hr className="w-1 h-14 mx-auto my-4 bg-[#DDD1E9] border-0"></hr>
                            <p className="font-bold text-2xl">SMK Negeri 1 Denpasar</p>
                            <p>2021-Current</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
