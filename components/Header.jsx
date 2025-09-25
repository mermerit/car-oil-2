import React from 'react'
import Navbar from "./Navbar.jsx";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
    <div className="relative min-h-screen mb-4 bg-cover bg-center flex
    items-center w-full overflow-hidden"
         style={{backgroundImage: "url('background/tank-700.jpg')",
    }} id='Header'>
     <div className=" absolute inset-0 z-1 bg-black/50 "></div>
        <Navbar/>
        <div className="container inset-0 z-2 text-center mx-auto py-6 px-6
        md-px-20 lg-px-32 text-primary  ">


            <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block
              max-w-3xl font-semibold pt-50 pb-6 opacity-0 animate-fade-in-delay-1" > زيت ئیكسترا بی وان</h2>
            <p className="text-lg md:text-2xl opacity-0 animate-fade-in-delay-2 ">مصمم لأقصى أداء لمحركك</p>
            <div className="flex flex-row gap-4 justify-center items-center mt-16  ">

                <a href="#Products" className="border hover:text-button border-button transition duration-400  px-8 py-3 max-sm:text-sm max-sm:px-4 max-sm:py-3 rounded opacity-0 animate-fade-in-delay-3">منتجاتنا</a>
                <a href="#Contact" className=" bg-button text-primary hover:bg-primary hover:text-button   transition duration-400 px-8 py-3 rounded max-sm:text-sm max-sm:px-4 max-sm:py-3 opacity-0 animate-fade-in-delay-3">تواصل معنا</a>
            </div>
        </div>
    </div>
    )

}
export default Header
