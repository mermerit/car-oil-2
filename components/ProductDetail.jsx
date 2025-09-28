<<<<<<< Updated upstream
import { useParams, Link } from "react-router-dom";
import {products} from "../data/index.jsx";


function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <p>Product not found.</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>

            <p className="mt-2">{product.description}</p>
            <Link to="/" className="text-blue-500 mt-4 inline-block">Back to Products</Link>
=======
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function ProductDetail({ product, onClose }) {
    if (!product)
        return <p className="text-center text-red-500">❌ المنتج غير موجود</p>;

    const phoneNumber = "9647501159786";

    const sendViaWhatsApp = () => {
        const message = `مرحباً 👋\nأرغب في معرفة المزيد عن المنتج:\n\n📌 الاسم: ${product.title}\n📝 الوصف: ${product.des}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4">
            {/* Overlay */}
            <div className="absolute inset-0" onClick={onClose}></div>

            {/* Modal Card */}
            <div
                className="relative bg-white rounded-2xl shadow-2xl w-5/6 max-w-5xl overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col md:flex-row ">
                    {/* Product Image */}
                    <div className="  flex flex-col justify-center items-center p-2">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="max-h-[250px] w-auto object-contain rounded-lg "
                        />
                    </div>


                    {/* Product Info */}
                    <div className="md:w-1/2 p-8 flex bg-button flex-col">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                            {product.title}
                        </h1>
                        <p className="text-gray-100 mb-6 leading-relaxed">{product.des}</p>

                        {product.mwas && (
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                                    المميزات:
                                </h2>
                                <ul className="space-y-3">
                                    {product.mwas.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-[12px] sm:text-[14px] lg:text-[16px] gap-2 text-gray-700"
                                        >
                                            <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* ✅ WhatsApp Floating Button */}
                <button
                    onClick={sendViaWhatsApp}
                    className="fixed bottom-30 right-10 sm:bottom-50 sm:right-12 md:bottom-32  md:right-15 lg:bottom-50 lg:right-30  flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition transform hover:scale-110"
                >
                    <WhatsAppIcon style={{ fontSize: "28px" }} />
                </button>
            </div>
>>>>>>> Stashed changes
        </div>
    );
}

export default ProductDetail;
