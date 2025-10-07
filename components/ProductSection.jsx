import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "../src/lib/utils.js";
import { products } from "../data/index.jsx";
import ProductDetail from "./ProductDetail.jsx";
import { Car, Droplet, Bike,ThermometerSnowflake, Shield } from "lucide-react";



export const ProductSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visibleCount, setVisibleCount] = useState(9); // 👈 show 3 rows initially (3x3 grid)

    const filteredProducts = products.filter(
        (product) =>
            activeCategory === "all" || product.category === activeCategory
    );

    const categories = [
        { id: "all", label: "All", icon: Car },
        { id: "oil", label: "Oil", icon: Droplet },
        { id: "bike oil", label: "Bike Oil", icon: Bike },
        { id: "cooler oil", label: "Cooler oil", icon: ThermometerSnowflake },
        { id: "diesel oil", label: "Diesel oil", icon: Shield },
    ];

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 9); // 👈 add 3 more rows (3x3 = 9 items)
    };

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
                            onClick={() => {
                                setActiveCategory(id);
                                setVisibleCount(9); // reset count when switching category
                            }}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2 rounded-full text-sm font-normal transition-all duration-300 capitalize",
                                activeCategory === id
                                    ? "bg-button text-white shadow-md scale-105"
                                    : "bg-gray-200 text-gray-700 fon hover:bg-button hover:text-white"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </button>
                    ))}
                </div>

                {/* ✅ Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProducts.slice(0, visibleCount).map((product, key) => (
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
                                    className="max-h-full object-cover transition-transform duration-500 "
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                                    {product.title}
                                </h1>
                                <h3 className=" text-[9px] text-gray-500 line-clamp-2">
                                    {product.des}
                                </h3>
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
                {/* ✅ Show More Button (works on all devices) */}
                {visibleCount < filteredProducts.length && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={handleShowMore}
                            className="px-6 py-3 bg-button text-white rounded-full shadow-md hover:scale-105 transition"
                        >
                            Show More
                        </button>
                    </div>
                )}

                {/* ✅ Product Detail Modal */}
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
