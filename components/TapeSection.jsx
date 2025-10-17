import { motion } from "framer-motion";
import { Fragment } from "react";

const images = [
    "/public/flags/mala.png",
    "/public/flags/indo.png",
    "/public/flags/thai.png",
    "/public/flags/philip.png",
    "/public/flags/vietnam.png",
    "/public/flags/iraq.png",
    "/public/flags/imarat.png",
    "/public/flags/saud.png",
    "/public/flags/kuwait.png",
    "/public/flags/jordan.png",

];

function TapeSection() {
    return (
        <div className="py-10 md:py-24">
            <div className="bg-gradient-to-r from-blue-200 to-button overflow-x-hidden -mx-1">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_50%,black_50%,transparent)]">
                    {[...new Array(3)].fill(0).map((_, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-none gap-6  sm:gap-12 px-3 sm:px-6 py-5"
                            animate={{ x: ["0", "-100%"] }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Fragment>
                                {images.map((src, index) => (
                                    <div key={index} className="inline-flex items-center">
                                        <img
                                            src={src}
                                            alt={`Product ${index}`}
                                            className="w-16 h-16 max-sm:w-10 max-sm:h-10  object-contain"
                                        />
                                    </div>
                                ))}
                            </Fragment>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TapeSection;
