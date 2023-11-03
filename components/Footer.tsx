import React from 'react'

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <section id="project" className="bg-[#DAD7E3]">
            <p className="text-xl text-semibold text-[#1E1E1E] text-center pt-5">Created by Najwa ( ˶ˆ꒳ˆ˵ )</p>

            <p className="text-semibold text-[#1E1E1E] text-center p-5">Copyright &#169; {year} Najwa Tahir. All right reserved.</p>
        </section>
    )
}
