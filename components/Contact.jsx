import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null); // success / error message

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                "service_n3ttn1j",
                "template_0orvaoe",
                form.current,
                "nGHr8zYqKeBtYX-vi"
            )
            .then(
                () => {
                    setStatus("success");
                    form.current.reset();
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <section
            id="Contact"
            className="relative py-24 px-6 md:px-16 lg:px-32 bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/95"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-white">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have questions about our oils? We’d love to hear from you —
                        whether it’s a product inquiry or partnership opportunity.
                    </p>
                    <div className="w-20 h-1 bg-button mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-gray-900/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl flex flex-col justify-between">
                        <div>
                            <p className="font-semibold mb-6 text-xl">Contact Information</p>
                            <div className="space-y-5 text-gray-300 text-md">
                                <p className="flex items-center gap-3">
                                    <LocationOnIcon className="text-button" /> Baghdad, Iraq
                                </p>
                                <p className="flex items-center gap-3">
                                    <PhoneIcon className="text-button" /> +964 783 145 6481
                                </p>
                                <p className="flex items-center gap-3">
                                    <EmailIcon className="text-button" /> extrab1.iq@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-10 text-3xl">
                            <a
                                href="https://wa.me/9647831456481"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-500 transition-transform transform hover:scale-110"
                            >
                                <WhatsAppIcon fontSize="inherit" />
                            </a>
                            <a
                                href="https://www.facebook.com/wolver.comepany?mibextid=ZbWKwL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-transform transform hover:scale-110"
                            >
                                <FacebookIcon fontSize="inherit" />
                            </a>
                            <a
                                href="#"
                                className="hover:text-pink-500 transition-transform transform hover:scale-110"
                            >
                                <InstagramIcon fontSize="inherit" />
                            </a>
                        </div>
                    </div>

                    {/* 📧 Email Form */}
                    <div className="bg-gray-900/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700
                                    focus:outline-none focus:ring-2 focus:ring-button transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700
                                    focus:outline-none focus:ring-2 focus:ring-button transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    placeholder="Write your message..."
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700
                                    focus:outline-none focus:ring-2 focus:ring-button transition-all"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className={`w-full py-3 font-semibold rounded-lg transition-transform transform hover:scale-105 shadow-md
                                    ${status === "sending"
                                    ? "bg-gray-600 cursor-not-allowed"
                                    : "bg-button hover:bg-button/90 text-white"
                                }`}
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                        {/* Feedback message */}
                        {status === "success" && (
                            <p className="mt-4 text-green-400 text-center font-medium">
                                ✅ Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="mt-4 text-red-400 text-center font-medium" >
                                ❌ Failed to send message. Please try again later.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
