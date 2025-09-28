<<<<<<< Updated upstream
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import {useState} from "react";
import {cn} from "../src/lib/utils.js";
import {products} from "../data/index.jsx";
=======
import { useState } from "react";
import { cn } from "../src/lib/utils.js";
import { products } from "../data/index.jsx";
import ProductDetail from "./ProductDetail.jsx"; // import modal
>>>>>>> Stashed changes

const categories = ["all","oil","stop oil"];

export const ProductSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState(null); // 🆕 state for modal

    const filteredSkills = products.filter(
        (product) => activeCategory === "all" || product.category === activeCategory
    );

    return (
        <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" id="Products">
                    Products <span className="text-button"> Services </span>
                </h2>
                <p className="text-center text-gray-600 font-normal mb-12 max-w-2xl mx-auto">
                    Dicover new Our Prdoct to save your engine for every crush every time.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center bg-gray-100 rounded-md gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-2 py-1 rounded-full font-normal  transition-colors duration-300 capitalize",
                                activeCategory === category
<<<<<<< Updated upstream
                                    ? "bg-button text-white"
                                    : " text-button bg-#F9FAFB hover:bg-button hover:text-primary "
=======
                                    ? " text-gray-700"
                                    : "text-gray-400"
>>>>>>> Stashed changes
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSkills.map((product, key) => (
<<<<<<< Updated upstream
                        <div key={key}
                             className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img  src={product.img}
                                     alt={product.title}
                                     className="w-full h-full object-contain bg-stone-200 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">

                                <h3 className="text-xl font-semibold mb-1"> {product.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {product.des}
                                </p>
                                <ul>
                                    {products.map((product, key) => (
                                        <li key={key}>{product.mwas}</li>
                                    ))}
                                </ul>

=======
                        <div
                            key={key}
                            className="group bg-gray-300 text-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg card-hover cursor-pointer"
                            onClick={() => setSelectedProduct(product)} // 🆕 open modal
                        >
                            <div className="h-60 overflow-hidden bg-primary hover:bg-gray-200 transition-all duration-500 m-2 rounded-2xl p-4">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-md text-gray-700 font-semibold mb-1">{product.title}</h3>
>>>>>>> Stashed changes

                            </div>
                        </div>
                    ))}
                </div>
<<<<<<< Updated upstream
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/machadop1407"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>

=======

                {/* Product Modal */}
                {selectedProduct && (
                    <ProductDetail
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)} // 🆕 close modal
                    />
                )}
>>>>>>> Stashed changes
            </div>
        </section>
    );
};
