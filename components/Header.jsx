import React, { useState } from "react";
import Navbar from "./Navbar.jsx";

const Header = () => {
    // Product images array
    const productImages = [
        "/products/zait-faraml.png",
        "/products/daba-shin.png",
        "/products/daba-sawz.png",
        "/products/tank-30.png"
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
            <div className=" mb-20 z-10 container mx-auto flex flex-col items-center justify-center text-center gap-12 py-16">
                <div className="flex flex-col items-center justify-center text-primary">
                    <h1 className="text-5xl sm:text-6xl md:text-[82px] font-semibold max-w-3xl
                    opacity-0 animate-fade-in-delay-1 tracking-wider">
                        Extra B1 Oil
                    </h1>
                    <p className="text-lg md:text-2xl mt-6 opacity-0 animate-fade-in-delay-2">
                        Premium Engine Oils for Modern & Classic Vehicles
                    </p>
                </div>
                <div className="flex flex-row gap-4  ">
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
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-20">
                {/* Product Image */}
                <a href="#Products">
                    <img
                        src={productImages[currentImage]}
                        alt={`Product ${currentImage + 1}`}
                        className="w-32 object-contain drop-shadow-lg"
                    />
                </a>

                {/* Dots below the product */}
                <div className="flex gap-2">
                    {productImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-3 h-3 rounded-full transition ${
                                currentImage === index ? "bg-white" : "bg-gray-400/70"
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
