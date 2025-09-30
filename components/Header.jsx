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
                <div className="flex flex-col items-center justify-center text-primary ">
                    <h1 className="text-5xl sm:text-6xl md:text-[82px] font-semibold max-w-3xl
                    opacity-0 animate-fade-in-delay-1 tracking-wider">
                        Extra B1 Oil
                    </h1>
                    <p className="text-lg md:text-2xl mt-6 opacity-0 animate-fade-in-delay-2">
                        Premium Engine Oils for Modern & Classic Vehicles
                    </p>
                    <div className="flex flex-row gap-4 my-10 ">
                        <button className="px-6 py-3 bg-button text-white rounded-lg shadow-lg hover:bg-white hover:text-button
                         transition duration-400">
                            <a href="#Products">Products</a>
                        </button> <button className="px-6 py-3 border border-button text-button rounded-lg shadow-lg
                        hover:text-white hover:border-white transition duration-400">
                            <a href="#Contact">Contact</a>
                        </button>
                    </div>
                </div>



            </div>
            <a href="#Products"> <div className="">

                <img
                    src="/products/zait-faraml.png"
                    alt="Product "
                    className=" w-32 sm:w-45  object-contain absolute right-0 sm:right-6 bottom-0 "
                /><img
                src="/products/zait-faraml.png"
                alt="Product 3"
                className=" w-32 sm:w-45 object-contain absolute left-0 sm:left-6 bottom-0  "
            />

            </div></a>


        </div>
    );
};

export default Header;
