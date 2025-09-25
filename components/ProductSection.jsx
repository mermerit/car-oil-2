import { ArrowRight, ExternalLink, Github } from "lucide-react";
import {useState} from "react";
import {cn} from "../src/lib/utils.js";
import {products} from "../data/index.jsx";

const categories = ["كل", "زيت" , "زيت فرامل"];
export const ProductSection =()=>{
    const [activeCategory, setActiveCategory] = useState("كل");

    const filteredSkills = products.filter(
        (product) => activeCategory === "كل" || product.category === activeCategory
    );
    return (
        <section  className="py-24 px-4 relative "  >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" id="Products">
                    {" "}
                    منتجاتنا <span className="text-button"> خدماتنا </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    استكشف تشكيلتنا المميزة من زيوت السيارات التي صُممت خصيصًا لتمنح محركك القوة والحماية التي يستحقها
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-12 ">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full border-2 border-button bg-button  transition-colors duration-300 capitalize ",
                                activeCategory === category
                                    ? "bg-button text-white"
                                    : " text-button bg-#F9FAFB hover:bg-button hover:text-primary "
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    {filteredSkills.map((product, key) => (
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


                            </div>
                        </div>

                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/machadop1407"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    )
}