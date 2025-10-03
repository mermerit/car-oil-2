import { CheckCircleIcon, X, Star } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail({ product, onClose }) {
    if (!product) return null;

    const phoneNumber = "9647501159786";

    const sendViaWhatsApp = () => {
        const message = `مرحباً 👋
أرغب في معرفة المزيد عن المنتج:

📌 الاسم: ${product.title}
📝 الوصف: ${product.des}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
    };

    const rating = product.rating || 5;

    return (
        <AnimatePresence>
            {product && (
                <motion.div
                    className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-2 sm:p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0" onClick={onClose}></div>

                    {/* Modal */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[90vh]"
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-1 sm:p-4 border-b border-gray-200 bg-gray-50">
                            <h2 className="text-sm sm:text-2xl font-bold text-gray-700">
                                {product.title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-gray-700 hover:text-red-500 transition"
                            >
                                <X className="w-7 h-7" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto p-4 sm:p-6 space-y-12 bg-gradient-to-br bg-gray-700 text-gray-100">
                            {/* Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="max-h-[200px] sm:max-h-[240px] w-auto object-contain "
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                    Description
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    {product.des}
                                </p>
                            </div>

                            {/* Features */}
                            {product.mwas && (
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                        Features
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {product.mwas.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Typical Properties */}
                            {product.typical && (
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                        Typical Properties
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {product.typical.map((prop, idx) => (
                                            <li key={idx}>{prop}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Standards */}
                            {product.standard && (
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                        Standards & Approvals
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {product.standard.map((std, idx) => (
                                            <li key={idx}>{std}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Applications */}
                            {product.aplication && (
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                        Applications
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {product.aplication.map((app, idx) => (
                                            <li key={idx}>{app}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Packing */}
                            {product.Packing && (
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                        Packing
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {product.Packing.map((pack, idx) => (
                                            <li key={idx}>{pack}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
                            <button
                                onClick={sendViaWhatsApp}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full shadow-md transition transform hover:scale-105 text-sm font-medium text-white"
                            >
                                <WhatsAppIcon style={{ fontSize: "18px" }} />
                                Contact via WhatsApp
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
