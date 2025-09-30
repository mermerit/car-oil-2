import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-xl text-gray-300 z-50 shadow-md"
        >
            <div className="max-w-6xl mx-auto flex justify-around items-center px-2 py-1">
                {/* Logo */}
                <a href="#Header">
                    <img src="/background/logo-white.png" alt="logo" className="h-16 w-auto" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 font-medium">
                    <a href="#Header" className="hover:text-button transition">Home</a>
                    <a href="#About" className="hover:text-button transition">About Us</a>
                    <a href="#Products" className="hover:text-button transition">Products</a>
                    <a href="#Contact" className="hover:text-button transition">Contact</a>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden cursor-pointer">
                    {showMobileMenu ? (
                        <CloseIcon
                            onClick={() => setShowMobileMenu(false)}
                            style={{ fontSize: "32px" }}
                        />
                    ) : (
                        <MenuIcon
                            onClick={() => setShowMobileMenu(true)}
                            style={{ fontSize: "32px" }}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu (Full Width) */}
            {showMobileMenu && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-xl w-full py-8 px-6 flex flex-col gap-6 text-lg font-medium border-t border-gray-700">
                    <a href="#Header" onClick={() => setShowMobileMenu(false)}>Home</a>
                    <a href="#About" onClick={() => setShowMobileMenu(false)}>About Us</a>
                    <a href="#Products" onClick={() => setShowMobileMenu(false)}>Products</a>
                    <a href="#Contact" onClick={() => setShowMobileMenu(false)}>Contact</a>

                    {/* Social Links */}
                    <div className="flex gap-6 pt-6 text-2xl">
                        <a href="#" className="hover:text-green-500"><WhatsAppIcon /></a>
                        <a href="#" className="hover:text-blue-500"><FacebookIcon /></a>
                        <a href="#" className="hover:text-pink-500"><InstagramIcon /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
