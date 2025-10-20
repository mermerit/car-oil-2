const Production = () => {
    return (
        <section
            id="Production"
            className="relative bg-gray-50 py-20 px-6 md:px-16 lg:px-32"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* ✅ Video */}
                <div className="relative w-full h-64 sm:h-80 md:h-[400px] overflow-hidden rounded-xl shadow-lg">
                    <video
                        src="/videos/oil-production.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    {/* Optional overlay for readability */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* ✅ Text Section */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                        How We Create <span className="text-button">Extra B1 Oil</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        At Extra B1, our oil production process combines advanced technology
                        with strict quality standards. Every drop is refined and tested to
                        deliver maximum performance, protection, and durability for your car’s engine.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        <li>✅ Premium raw materials</li>                        <li>✅ Advanced refining technology</li>
                        <li>✅ International quality certifications</li>
                        <li>✅ Engine protection & long-lasting performance</li>
                    </ul>

                    <button className="mt-8 px-6 py-3 bg-button text-white rounded-lg shadow-lg hover:bg-button/80 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Production;
