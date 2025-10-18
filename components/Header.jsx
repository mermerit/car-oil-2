import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./Navbar.jsx";

const Header = () => {
    const images = [
        "/background/header.png",
        "/background/post.png",
        "/background/post-mor.png",
        "/background/post-zard.png",


    ];

    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    // Auto slide every 8 seconds
    useEffect(() => {
        const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

        // clear existing interval before creating new one
        clearInterval(timeoutRef.current);
        timeoutRef.current = setInterval(nextSlide, 8000);

        return () => clearInterval(timeoutRef.current);
    }, [images.length]);

    // Manual controls
    const goToPrev = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    const goToNext = () => setCurrent((prev) => (prev + 1) % images.length);

    // Swipe handling (for mobile)
    const touchStartX = useRef(null);
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (diff > 50) goToPrev();
        else if (diff < -50) goToNext();
        touchStartX.current = null;
    };

    return (
        <div
            id="Header"
            className="relative w-full flex flex-col items-center justify-center overflow-hidden max-md:pt-19  py-15 bg-gray-50 lg:h-screen   "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Navbar */}
            <Navbar />

            {/* Background Image Slider */}
            <div className="relative w-full flex justify-center items-center">
                <img
                    src={images[current]}
                    alt={`Header Background ${current + 1}`}
                    className="w-full h-auto object-cover max-h-[100vh]"
                />

                {/* Arrows (visible on large screens) */}
                <button
                    onClick={goToPrev}
                    className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={goToNext}
                    className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                current === index ? "bg-blue-600 scale-110" : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>



        </div>
    );
};

export default Header;
