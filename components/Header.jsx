import React, { useState } from "react";
import Navbar from "./Navbar.jsx";

const Header = () => {
    // Product images array
    const productImages = [
        "/products/zait-faraml.png",
        "/products/daba-shin.png",
        "/products/daba-sawz.png",
        "/products/tank-30.png",
    ];

    // State for current image index
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div
            className="relative min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden"
            style={{ backgroundImage: "url('background/tank-700.jpg')" }} // fixed background
            id="Header"
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className=" max-sm:mb-20  z-10 container mx-auto flex flex-col items-center justify-center text-center gap-12 py-16">
                <div className="flex flex-col items-center justify-center text-primary">
                    <h1 className="text-5xl sm:text-6xl md:text-[82px] font-semibold max-w-3xl
                    opacity-0 animate-fade-in-delay-1 tracking-wider">
                        Extra B1 Oil
                    </h1>
                    <h3 className="text-md md:text-xl mt-6 opacity-0 animate-fade-in-delay-2">
                        Premium Engine Oils for Modern & Classic Vehicles
                    </h3>
                </div>
                <div className="flex flex-row gap-4 opacity-0 animate-fade-in-delay-3 ">
                    <button className="px-6 py-3 bg-button text-white rounded-lg shadow-lg hover:bg-white hover:text-button
                         transition duration-400">
                        <a href="#Products">Products</a>
                    </button> <button className="px-6 py-3 border border-button text-button rounded-lg shadow-lg
                        hover:text-white hover:border-white transition duration-400">
                    <a href="#Contact">Contact</a>
                </button>
                </div>
            </div>


            {/* Product image in the bottom-center */}

            <div
                className="absolute bottom-6 lg:bottom-10 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2
            lg:right-40 opacity-0 animate-fade-in-delay-4
            flex flex-col items-center gap-3 z-20"
            >
                {/* Product Image */}
                <a
                    href="#Products"
                    onClick={(e) => {
                        e.preventDefault(); // prevent jump to #Products when just cycling images
                        setCurrentImage((prev) =>
                            prev === productImages.length - 1 ? 0 : prev + 1
                        );
                    }}
                    className="cursor-pointer"
                >
                    <img
                        src={productImages[currentImage]}
                        alt={`Product ${currentImage + 1}`}
                        className="w-40 md:w-45 object-contain"
                    />
                </a>
            </div>

        </div>
    );
};

export default Header;
