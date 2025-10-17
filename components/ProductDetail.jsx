import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail({ product, onClose }) {
    const phoneNumber = "9647831456481";
    const [activeSection, setActiveSection] = useState("description");

    // Lock body scroll when modal is open
    useEffect(() => {
        const body = document.body;
        let scrollY = 0;
        if (product) {
            scrollY = window.scrollY;
            body.dataset.scrollY = scrollY;
            body.style.overflow = "hidden";
            body.style.position = "fixed";
            body.style.top = `-${scrollY}px`;
            body.style.width = "100%";
        }

        return () => {
            const savedY = parseInt(body.dataset.scrollY || "0", 10);
            body.style.overflow = "";
            body.style.position = "";
            body.style.top = "";
            body.style.width = "";
            delete body.dataset.scrollY;

            requestAnimationFrame(() => {
                window.scrollTo({ top: savedY, behavior: "instant" });
            });
        };
    }, [product]);

    if (!product) return null;

    const sendViaWhatsApp = () => {
        const message = `Hello, I want to know more about this product:

📌 Name: ${product.title}
📝 Description: ${product.des}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
    };

    // Sections dynamically defined
    const sections = [
        { key: "description", label: "Description", content: product.des },
        { key: "specs", label: "Specifications", content: product.mwas },
        { key: "typical", label: "Typical Properties", content: product.typical },
        { key: "standards", label: "Standards", content: product.standard },
        { key: "applications", label: "Applications", content: product.aplication },
        { key: "packing", label: "Packing", content: product.packing },
        { key: "stageone", label: "Stage 1", content: product.stageone },
        { key: "stagetwo", label: "Stage 2", content: product.stagetwo },
        { key: "stagethree", label: "Stage 3", content: product.stagethree },
    ].filter((s) => s.content);

    return (
        <AnimatePresence>
            {product && (
                <motion.div
                    className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-2 sm:p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Background click to close */}
                    <div className="absolute inset-0" onClick={onClose}></div>

                    {/* Scrollable Modal */}
                    <motion.div
                        className="relative bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl h-[90vh] overflow-y-auto text-gray-100 flex flex-col"
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 bg-gray-100">
                            <h2 className="text-lg sm:text-2xl font-bold text-gray-950 truncate">
                                {product.title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-red-400 transition"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Product Image */}
                        <div className="flex justify-center bg-gray-100 py-4">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="max-h-[240px] sm:max-h-[280px] w-auto object-contain rounded-lg"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center gap-2 px-3 py-2 bg-gray-200">
                            {sections.map((section) => (
                                <button
                                    key={section.key}
                                    onClick={() => setActiveSection(section.key)}
                                    className={`px-3 py-1.5 text-xs sm:text-md rounded-full font-medium transition-all duration-200 ${
                                        activeSection === section.key
                                            ? "bg-button text-white shadow-md"
                                            : " text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>

                        {/* Content Area (no inner scroll) */}
                        <div className="bg-gray-100 p-6 text-gray-500 leading-relaxed text-xs sm:text-md">
                            <AnimatePresence mode="wait">
                                {sections
                                    .filter((s) => s.key === activeSection)
                                    .map((section) => (
                                        <motion.div
                                            key={section.key}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <h3 className="text-lg sm:text-xl font-semibold mb-4  text-center text-black">
                                                {section.label}
                                            </h3>

                                            {Array.isArray(section.content) ? (
                                                <ul className=" space-y-1 text-gray-600 list-disc list-inside ">
                                                    {section.content.map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="whitespace-pre-line">{section.content}</p>
                                            )}
                                        </motion.div>
                                    ))}
                            </AnimatePresence>
                        </div>

                        {/* Footer */}
                        {/*<div className="p-3 bg-gray-100 text-center sticky bottom-0">*/}
                        {/*    <button*/}
                        {/*        onClick={sendViaWhatsApp}*/}
                        {/*        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-full shadow-md transition transform hover:scale-105 text-[12px] font-medium text-gray-100"*/}
                        {/*    >*/}
                        {/*        Contact via WhatsApp*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
