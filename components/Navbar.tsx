"use client"

import React, { useState } from "react"
import Image from "next/image"

import { Link } from "react-scroll/modules"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Project",
        page: "project",
    },
    {
        label: "Contact",
        page: "contact",
    },
]

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    return (
        <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 bg-[#ffff]">
            <div className="justify-between md:items-center md:flex rubik">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="home">
                            <div className="container flex items-center space-x-2">
                                <Image
                                    src="/images/logo-nat.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className=""
                                />
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className={
                                            "block lg:inline-block text-[#1B1F2C] font-semibold hover:text-[#485375] md:pl-3 md:pr-3 cursor-pointer scroll-pt-5"
                                        }
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-79}
                                        duration={100}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}