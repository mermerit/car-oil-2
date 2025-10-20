import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import OilBarrelIcon from '@mui/icons-material/OilBarrel';

const stats = [
    { value: "30+", label: "Years of Excellence", icon: <StarIcon /> },
    { value: "66+", label: "General car-related Items", icon: <OilBarrelIcon /> },
    { value: "100%", label: "Premium Quality", icon: <WorkspacePremiumIcon /> },
    { value: "24/7", label: "Customer Support", icon: <SupportAgentIcon /> },
];
const About = () => {
    return (
        <section
            id="About"
            className="relative bg-gray-100 flex flex-col items-center justify-center
             text-white py-24 px-6 md:px-16 lg:px-32 w-full"
        >
            {/* Content */}
            <div className="relative z-10 max-w-7xl w-full">
                {/* Title */}
                <div className="text-center max-sm:mb-6 mb-16">
                    <h2 className="text-4xl sm:text-5xl text-black font-bold mb-4">
                        About <span className="text-button">Extra B1</span>
                    </h2>
                    <div className="w-20 h-1 bg-button mx-auto rounded-full mb-4"></div>

                    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                        We specialize in providing high-quality car oils that protect your engine
                        and deliver outstanding performance for every drive.
                    </p>
                </div>

                {/* Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Image */}
                    <div className="flex-1 flex-row justify-center">
                        <img
                            src="/background/zait-taza.png"
                            alt="Oil Bottle"
                            className="w-full max-w-md  "
                        />
                    </div>

                    {/* Text + Stats */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 w-full mb-12">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center lg:items-start bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl shadow-md border border-gray-700"
                                >
                                    <div className="text-button text-3xl mb-3">{stat.icon}</div>
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Paragraph */}
                        <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
                            At Extra B1, we prioritize our customers’ trust. Our mission is to
                            provide premium engine oils that meet global standards. Each of our
                            products is carefully crafted to ensure maximum protection, power, and
                            durability for your vehicle.
                        </p>
                        {/* CTA Button */}
                        <a
                            href="#Contact"
                            className="px-10 py-4 bg-button text-white font-semibold rounded-lg shadow-lg
                            hover:bg-button/90 hover:shadow-button/40 hover:scale-105 transform transition mb-10"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
