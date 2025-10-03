import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_cotkat9", // 🔑 from EmailJS
                "template_i8c41ij", // 🔑 from EmailJS
                form.current,
                "dBh5V5Ng4FsUZhAnr" // 🔑 from EmailJS (public key)
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("✅ Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("❌ Failed to send message, please try again.");
                }
            );
    };

    return (
        <section
            id="Contact"
            className="relative py-24 px-6 md:px-16 lg:px-32 bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95  to-gray-900/95"></div>

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
                    {/* Contact Info */}
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

                    {/* ✅ Email Form */}
                    <div className="bg-gray-900/80 backdrop-blur-lg p-10 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div>
                                <label className="block text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-button"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-button"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    placeholder="Write your message..."
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-button"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-button text-white font-semibold rounded-lg hover:scale-105 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
