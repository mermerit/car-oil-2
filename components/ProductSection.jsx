import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "../src/lib/utils.js";
import { products } from "../data/index.jsx";
import ProductDetail from "./ProductDetail.jsx";
import { Car, Droplet, Ban } from "lucide-react";


export const ProductSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(
        (product) =>
            activeCategory === "all" || product.category === activeCategory
    );
    const categories = [
        { id: "all", label: "All", icon: Car },
        { id: "oil", label: "Oil", icon: Droplet },
        { id: "stop oil", label: "Stop Oil", icon: Ban },
    ];


    return (
        <section className="py-24 px-4 relative bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto max-w-6xl">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-5xl font-extrabold mb-4"
                        id="Products"
                    >
                        Our <span className="text-button">Products</span> & Services
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Discover our latest products designed to protect your engine in
                        every condition. High-quality oils and additives tailored for
                        performance and durability.
                    </p>
                </div>

                {/* ✅ Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveCategory(id)}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize",
                                activeCategory === id
                                    ? "bg-button text-white shadow-md scale-105"
                                    : "bg-gray-200 text-gray-700 hover:bg-button hover:text-white"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </button>
                    ))}
                </div>

                {/* ✅ Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProducts.map((product, key) => (
                        <div
                            key={key}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer border border-gray-100"
                            onClick={() => setSelectedProduct(product)}
                        >
                            {/* Image */}
                            <div className="h-60 flex items-center justify-center bg-gradient-to-tr from-gray-100 to-gray-200 p-6">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-gray-500 line-clamp-2">
                                    {product.des}
                                </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-button/90 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-semibold">
                  View Details →
                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ✅ Extra Button */}

                {/* ✅ Modal */}
                {selectedProduct && (
                    <ProductDetail
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </div>
        </section>
    );
};

export default ProductSection;
