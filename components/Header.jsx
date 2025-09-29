import React from "react";
import Navbar from "./Navbar.jsx";

const Header = () => {
    return (
        <div
            className="relative min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden"
            style={{ backgroundImage: "url('background/tank-700.jpg')" }}
            id="Header"
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Navbar */}
            <Navbar />
            {/*<Navbar />*/}

            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center gap-12 py-16">
                {/* Top Text */}
                <div className="flex flex-col items-center justify-center text-primary mt-40">
                    <h1 className="text-6xl sm:text-6xl md:text-[82px] font-semibold max-w-3xl opacity-0 animate-fade-in-delay-1 tracking-wider">
                        Extra B1 Oil
                    </h1>
                    <p className="text-lg md:text-2xl mt-6 opacity-0 animate-fade-in-delay-2">
                        Design for best engine your car
                    </p>
                    <div className="flex flex-row gap-4 mt-10">
                        <button className="px-6 py-3 bg-button text-white rounded-lg shadow-lg hover:bg-button/80 transition">
                            <a href="#Products">Products</a>
                        </button>
                    </div>
                </div>

                {/* Product Images */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <img
                        src="/products/daba-shin.png"
                        alt="Product 1"
                        className="rounded-xl w-45 shadow-lg object-contain  p-4"
                    />
                    <img
                        src="/products/daba-zard.png"
                        alt="Product 2"
                        className="rounded-xl w-45 shadow-lg object-contain p-4"
                    />
                    <img
                        src="/products/zait-faraml.png"
                        alt="Product 3"
                        className="rounded-xl w-45 shadow-lg object-contain  p-6"
                    />
                    <img
                        src="/products/tank-40.png"
                        alt="Product 4"
                        className="rounded-xl w-45 shadow-lg object-contain  p-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
