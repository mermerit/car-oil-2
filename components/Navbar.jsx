import React, {useEffect, useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const Navbar = () => {
    const [showMobileMenu , setShowMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const threshold = 120; // px before hiding or showing

            if (currentScrollY - lastScrollY > threshold) {
                // user scrolled down enough -> hide navbar
                setVisible(false);
                setLastScrollY(currentScrollY);
            } else if (lastScrollY - currentScrollY > threshold) {
                // user scrolled up enough -> show navbar
                setVisible(true);
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        document.body.style.overflowY = showMobileMenu ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflowY = 'auto';
        }
    }, [showMobileMenu]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // ✅ fixed from screenY to scrollY
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflowY = showMobileMenu ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflowY = 'auto';
        }
    }, [showMobileMenu]);

    return (
<<<<<<< Updated upstream
        <div className={`fixed top-0 ${visible ? "md:translate-y-0 md:top-4 " :"md:-translate-full"} transition-all duration-400 left-0 w-full z-20  md:left-1/2 md:transform md:-translate-x-1/2 md:w-[90%] md:max-w-4xl md:rounded-full md:px-6 ` }>
            <div className="md:backdrop-blur-3xl bg-button md:bg-black/20 text-white  md:container mx-auto flex justify-between  md:justify-center md:rounded-full
=======
        <div className={`fixed top-0 ${visible ? "md:translate-y-0 md:top-4 " :"md:-translate-full"} transition-all duration-400 left-0 w-full z-20  
        md:left-1/2 md:transform md:-translate-x-1/2 md:w-[90%] md:max-w-4xl md:rounded-full md:px-2 ` }>
            <div className="md:backdrop-blur-3xl bg-button md:bg-gray-800   text-gray-300  md:container mx-auto flex justify-between  md:justify-center md:rounded-full
>>>>>>> Stashed changes
            gap-40 items-center py-1 px-6 md:px-8 lg:px-28">

                {/* Logo */}
                <a href="#Header">
                    <img src="../public/background/logo-white.png" alt="logo" className="h-15 w-15" />
                </a>

                {/* Desktop Menu */}
<<<<<<< Updated upstream
                <ul className="hidden md:flex gap-10 ">
                    <a href="#Header" className="hover:text-button   transition duration-300">الرئيسية</a>
                    <a href="#About" className="hover:text-button transition duration-300">من نحن</a>
                    <a href="#Projects" className="hover:text-button transition duration-300">خدماتنا</a>
                    <a href="#Testimoni" className="hover:text-button transition duration-300">تواصل معنا</a>
=======
                <ul className="hidden md:flex gap-8 ">

                    <a href="#Header" className="hover:text-gray-300   transition duration-300">Home</a>
                    <a href="#About" className="hover:text-gray-300 transition duration-300">About Us</a>
                    <a href="#Products" className="hover:text-gray-300 transition duration-300">Producs</a>
                    <a href="#Contact" className="hover:text-gray-300 transition duration-300">Contact</a>

>>>>>>> Stashed changes
                </ul>


                {/* Mobile Menu Button */}
                <div className="md:hidden w-7 cursor-pointer text-white">
                    <MenuIcon onClick={() => setShowMobileMenu(true)}
                         style={{ fontSize:"32px"}}/>
                </div>

                {/* Overlay (click to close) */}

                <div
                    className={`
                    fixed inset-0
                    bg-gray-700/50 
                    transition-opacity   duration-600 ease-in-out
                ${showMobileMenu ? "opacity-100 backdrop-blur-md" : "opacity-0 pointer-events-none"}
                            `}
                    onClick={() => setShowMobileMenu(false)}
                >
                </div>



                {/* Mobile Menu */}
                <div className={`md:hidden fixed w-2/3 right-0 top-0 bottom-0 z-20
                    transform transition-transform duration-500 ease-in-out 
                    bg-gray-800 text-gray-100 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className="flex justify-start p-6">
                        <ArrowCircleRightOutlinedIcon
                            onClick={() => setShowMobileMenu(false)}
                            style={{fontSize:"32px"}}
                            className={`${!showMobileMenu ?'bg-white text-foreground':'text-white bg-foreground'} rounded-full `}
                        />
                    </div>

<<<<<<< Updated upstream
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-semibold">
                        <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2">الرئيسية</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2">من نحن</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2">خدماتنا</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#Contact" className="px-4 py-2">تواصل معنا</a>
=======
                    <ul className="flex flex-col items-start  gap-6 mt-5 px-5 text-lg font-normal border-b">
                        <a onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2  ">Home</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2">About</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#Products" className="px-4 py-2 ">Products</a>
                        <a onClick={() => setShowMobileMenu(false)} href="#Contact" className="px-4 py-2 ">Contact</a>
>>>>>>> Stashed changes
                    </ul>
                    <div className="mt-25 flex justify-around items-center mx-auto w-2/3">
                        <a href="" className=""><WhatsAppIcon/></a>
                        <a href="" className=""><FacebookIcon/></a>
                        <a href="" className=""><InstagramIcon/></a>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Navbar;
