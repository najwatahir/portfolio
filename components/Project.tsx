import React from "react"
import Image from "next/image"

const Project = () => {
    return (
        <section id="project" className="bg-[#f3eef8] pt-5 rubik">
            <h1 className="my-5 text-center font-bold text-2xl md:text-4xl text-[#1E1E1E]">
                PROJECT
                <hr className="w-12 h-1 mx-auto my-4 bg-[#fcdf78] border-0 rounded"></hr>
            </h1>
            <div className="container px-5 py-5 mx-auto rubik">
                <div className="flex flex-wrap justify-center">
                    <div className="project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4">
                        <div className="h-fit rounded-lg overflow-hidden cursor-default">
                            <Image
                                src="/images/api-documentation.jpeg"
                                alt="API Documentation"
                                width={325}
                                height={325}
                                className="lg:h-40 w-screen object-cover object-center"
                            />
                            <div className="p-4">
                                <h1 className="text-xl font-semibold mb-3">API Documentation</h1>
                                <p className="leading-relaxed mb-3">A simple REST API Documentation made with ExpressJS and Prisma</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://documenter.getpostman.com/view/29807114/2s9YXk52Ug" target="_blank"><button>
                                        <Image
                                            src="/images/browser-icon.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className=""
                                        />
                                    </button>
                                    </a>
                                    <a href="https://github.com/najwatahir/sumeru-akademiya-api" target="_blank"><button>
                                        <Image
                                            src="/images/github-icon.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="ml-2"
                                        />
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4">
                        <div className="h-fit rounded-lg overflow-hidden cursor-default">
                            <Image
                                src="/images/card-web.jpeg"
                                alt="Personal Card Website"
                                width={325}
                                height={325}
                                className="lg:h-40 w-screen object-cover object-center"
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-semibold mb-3">Personal Card Website</h1>
                                <p className="leading-relaxed mb-3">A website that contains some of my personal information. Made with NextJS & Tailwind</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://annetarc.vercel.app/" target="_blank"><button>
                                        <Image
                                            src="/images/browser-icon.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className=""
                                        />
                                    </button>
                                    </a>
                                    <a href="https://github.com/najwatahir/annetarc-card" target="_blank"><button>
                                        <Image
                                            src="/images/github-icon.png"
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="ml-2"
                                        />
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-box sm:w-1/2 lg:w-1/4 rounded-lg h-1/4">
                        <div className="h-fit rounded-lg overflow-hidden cursor-default">
                            <Image
                                src="/images/literalfabet.jpeg"
                                alt="Literalfabet"
                                width={325}
                                height={325}
                                className="lg:h-40 w-screen object-cover object-center"
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-semibold mb-3">Literalfabet</h1>
                                <p className="leading-relaxed mb-3">A bookstore website made with PHP. This website is currently still under development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Project