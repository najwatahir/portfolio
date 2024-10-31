import React from "react"

const AboutPage = () => {
    return (
        <section id="about" className=" mt-0 pb-6 bg-[#EDEDED]">
            <div className="md:pt-5 md:pb-5 p-10 lg:p-2 rubik">
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 mr-auto ml-auto justify-between p-6">
                        <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:text-center text-[#1E1E1E] font-['Concert One']">
                            ABOUT ME
                        </h1>
                        <hr className="w-12 h-1 mx-auto my-4 bg-[#fcdf78] border-0 rounded"></hr>
                        <p className="text-[#1E1E1E] mb:text-lg text-base">
                            Hi future builders! My name is <span>Najwa Tahir</span>, you can call me <span>Najwa</span> for short. I am currently studying Information Technology @ Udayana University.
                        </p>
                        <br />
                        <p>
                            I start coding on the first year of Vocational High School. I like problem solving and logic things, so that was the reason i choosed Software Engineering major. My dream is to be a Software Engineer.

                        </p>
                        <br />
                        <p className="mb-10">
                            I am a very curious person. I love to learning new things everyday, especially in improving my coding skill. I always try to trust every single process I make.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage