import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "../src/lib/utils.js";
import { products } from "../data/index.jsx";
import ProductDetail from "./ProductDetail.jsx";
import { Car, Droplet, Fuel ,ThermometerSnowflake, ShieldPlus,Zap   } from "lucide-react";




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
        { id: "gasoline", label: "Gasoline Oil", icon: Fuel  },
        { id: "diesel", label: "Diesel oil", icon: Droplet  },
        { id: "dynamic", label: "Dynamic Oil", icon: Zap },
        { id: "brake", label: "Brake Oil ", icon: ShieldPlus },


    ];

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6); // 👈 add 3 more rows (3x3 = 9 items)
    };

    return (
        <section className="lg:pt-30  relative bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="md:container mx-auto max-w-6xl px-6 pb-2">
                {/* Section Title */}
                <div className="text-center mb-10">
                    <h2
                        className="text-3xl md:text-5xl font-extrabold mb-4"
                        id="Products"
                    >
                        Our <span className="text-button">Products</span> & Services
                    </h2>
                    {/*<p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">*/}
                    {/*    Discover our latest products designed to protect your engine in*/}
                    {/*    every condition. High-quality oils and additives tailored for*/}
                    {/*    performance and durability.*/}
                    {/*</p>*/}
                </div>

                {/* ✅ Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">

                    {categories.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => {
                                setActiveCategory(id);
                                setVisibleCount(6); // reset count when switching category
                            }}
                            className={cn(
                                "flex items-center gap-2 px-3 py-1 rounded-full text-sm  font-normal max-sm:text-[11px]  " +
                                "transition-all duration-300 capitalize",
                                activeCategory === id
                                    ? "bg-button text-white shadow-md scale-110"
                                    : "bg-gray-200 text-gray-700 fon hover:bg-button hover:text-white"
                            )}
                        >
                            <Icon className="max-sm:w-3 max-sm:h-3 w-4 h-4" />
                            {label}
                        </button>
                    ))}
                </div>

                {/* ✅ Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 max-md:gap-5 gap-10">
                    {filteredProducts.slice(0, visibleCount).map((product, key) => (
                        <div
                            key={key}
                            className="group relative bg-white rounded-2xl overflow-hidden max-md:mb-4 shadow-md hover:shadow-xl
                             transition cursor-pointer border border-gray-100"
                            onClick={() => setSelectedProduct(product)}
                        >
                            {/* Image */}
                            <div className="max-sm:h-40 h-60 flex items-center justify-center bg-gradient-to-tr from-gray-100 to-gray-200
                            p-4 sm:p-6">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="max-h-full object-cover transition-transform duration-500 "
                                />
                            </div>



                            {/* Info */}
                            <div className="p-3 sm:p-4">
                                <h1 className="text-xs sm:text-lg  font-semibold text-gray-600 ">
                                    {product.title}
                                </h1>

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
