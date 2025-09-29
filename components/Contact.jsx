import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
    return (
        <section
            id="Contact"
            className="relative py-24 px-6 md:px-16 lg:px-32 bg-cover bg-center"

        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95  to-gray-900/95"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-white">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have questions about our oils? Reach out and let’s keep your engine running at its best.
                    </p>
                    <div className="w-20 h-1 bg-button mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Info Card */}
                    <div className="bg-gray-900/80 backdrop-blur-lg p-10 rounded-2xl shadow-lg flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-5 text-gray-300 text-lg">
                                <p className="flex items-center gap-3">
                                    <LocationOnIcon className="text-button" /> Erbil, Iraq
                                </p>
                                <p className="flex items-center gap-3">
                                    <PhoneIcon className="text-button" /> +964 750 115 9786
                                </p>
                                <p className="flex items-center gap-3">
                                    <EmailIcon className="text-button" /> info@extrab1oil.com
                                </p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-6 mt-10 text-3xl">
                            <a href="#" className="hover:text-green-500 transition">
                                <WhatsAppIcon fontSize="inherit" />
                            </a>
                            <a href="#" className="hover:text-blue-500 transition">
                                <FacebookIcon fontSize="inherit" />
                            </a>
                            <a href="#" className="hover:text-pink-500 transition">
                                <InstagramIcon fontSize="inherit" />
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Contact;
