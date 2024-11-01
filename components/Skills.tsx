import React from 'react'
import Image from 'next/image'

export default function Skills() {
    return (
        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left rubik bg-[#f3eef8]'>
            <div className="text-center md:w-1/2 md:text-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center mx-auto">SKILLS & ABILITIES</h1>
                <hr className="w-12 h-1 mx-auto my-4 bg-[#fcdf78] border-0 rounded"></hr>
                <div className="flex flex-wrap flex-row z-10  items-center justify-center">
                    <div className="skill-box">
                        <p>HTML</p>
                        <Image
                            src="/images/html.png"
                            alt="HTML"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="skill-box">
                        <p>CSS</p>
                        <Image
                            src="/images/css.png"
                            alt="CSS"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="skill-box">
                        <p>Tailwind CSS</p>
                        <Image
                            src="/images/tailwind-css.png"
                            alt="Tailwind CSS"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="skill-box">
                        <p>NextJS</p>
                        <Image
                            src="/images/nextjs.png"
                            alt="NextJS"
                            width={100}
                            height={100}
                            className="mt-4"
                        />
                    </div>
                    <div className="skill-box">
                        <p>JavaScript</p>
                        <Image
                            src="/images/js.png"
                            alt="JavaScript"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="skill-box">
                        <p>PHP</p>
                        <Image
                            src="/images/php.png"
                            alt="PHP"
                            width={100}
                            height={100}
                            className="mt-4"
                        />
                    </div>
                    <div className="skill-box">
                        <p>MySQL</p>
                        <Image
                            src="/images/mysql.png"
                            alt="MySQL"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                </div>
                <div className="flex flex-wrap flex-row z-10 justify-center">
                    <div className="ability-box">
                        <p>Problem Solving</p>
                    </div>
                    <div className="ability-box">
                        <p>Creative Thinking</p>
                    </div>
                    <div className="ability-box">
                        <p>Team Working</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
