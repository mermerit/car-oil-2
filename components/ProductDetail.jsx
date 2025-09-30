import { CheckCircleIcon, X, Star } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail({ product, onClose }) {
    if (!product) return null;

    const phoneNumber = "9647501159786";

    const sendViaWhatsApp = () => {
        const message = `مرحباً 👋\nأرغب في معرفة المزيد عن المنتج:\n\n📌 الاسم: ${product.title}\n📝 الوصف: ${product.des}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank");
    };

    // التقييم (افتراضي 5 إذا ما موجود)
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

                    {/* Modal Card */}
                    <motion.div
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col"
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-200">
                            <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                                {product.title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-red-500 transition"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex flex-col md:flex-row">
                            {/* Product Image */}
                            <div className="flex-1 flex justify-center items-center bg-gray-100 p-4">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="max-h-[200px] sm:max-h-[250px] md:max-h-[300px] w-auto object-contain "
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-gray-800 to-gray-700 text-primary">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                        الوصف
                                    </h3>
                                    <p className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                                        {product.des}
                                    </p>

                                    {/* ✅ التقييم بالنجوم */}
                                    <div className="flex items-center mb-4 sm:mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 sm:w-6 sm:h-6 ${
                                                    i < rating
                                                        ? "text-yellow-400 fill-yellow-400"
                                                        : "text-gray-400"
                                                }`}
                                            />
                                        ))}
                                        <span className="ml-2 sm:ml-3 text-xs sm:text-sm">
                      {rating} / 5
                    </span>
                                    </div>

                                    {product.mwas && (
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                                المميزات:
                                            </h3>
                                            <ul className="space-y-2 sm:space-y-3">
                                                {product.mwas.map((feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center text-xs sm:text-sm gap-2"
                                                    >
                                                        <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* WhatsApp Button */}
                                <div className="mt-4 sm:mt-6 text-center">
                                    <button
                                        onClick={sendViaWhatsApp}
                                        className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500 hover:bg-green-600 rounded-full shadow-md transition transform hover:scale-105 text-xs sm:text-sm"
                                    >
                                        <WhatsAppIcon style={{ fontSize: "16px" }} />
                                        <span className="font-medium">Contact via WhatsApp</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
