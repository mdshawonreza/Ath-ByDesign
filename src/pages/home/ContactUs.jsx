import React, { useRef, useState } from "react";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Swal from "sweetalert2";


const ContactUs = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50 }, // bottom থেকে আসবে
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            "service_7obxcyo",   // replace with your EmailJS service ID
            "template_fdi242u",  // replace with your EmailJS template ID
            form.current,
            "C44v11HP0_siQUHzr"    // replace with your EmailJS public key
        ).then(
    (result) => {
        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message was sent successfully.",
            confirmButtonColor: "#ff7a00",
        });

        setLoading(false);
        form.current.reset();
    },
    (error) => {
        Swal.fire({
            icon: "error",
            title: "Message Failed!",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#ff0000",
        });

        setLoading(false);
    }
);

    };

    return (
        <section id="contact" className="relative w-full min-h-screen  bg-black text-orange-600 py-16">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-4xl mx-auto text-center md:pt-16 mb-5 md:mb-10"
            >
                <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold mb-3 md:mb-6">
                    <span className="text-white tracking-tight ">Contact Us</span>
                </motion.h2>

                <motion.p variants={item} className="text-lg md:text-xl text-gray-300">
                    Fill out the form below to get in touch with us.
                </motion.p>
            </motion.div>

            <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-10">
                {/* Social Media */}
                <div className="w-full md:w-1/2 bg-gray-900 border border-orange-600 p-5 pt-8">
                    <h3 className="text-2xl font-semibold mb-5 text-orange-600">My Social Media</h3>
                    <div className="flex flex-col gap-3">
                        <a href="https://www.facebook.com/share/17QrkgMKpq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white hover:bg-orange-600 p-2 transition">
                            <FaFacebook size={28} /> <span className="ml-2">Facebook</span>
                        </a>
                        <a href="https://www.tiktok.com/@athletebydesign_?_t=ZT-90xkiLJsRrL&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white hover:bg-orange-600 p-2 transition">
                            <FaTiktok size={28} /> <span className="ml-2">TikTok</span>
                        </a>
                        <a href="https://www.instagram.com/athletebydesign_?igsh=MWMwcndwbmZoY2hocw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white hover:bg-orange-600 p-2 transition">
                            <FaInstagram size={28} /> <span className="ml-2">Instagram</span>
                        </a>
                        <a href="https://youtube.com/@athletebydesign?si=9iPDppGGZlnTtHXX" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white hover:bg-orange-600 p-2 transition">
                            <FaYoutube size={28} /> <span className="ml-2">YouTube</span>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 border border-orange-600 p-6 bg-gray-900">
                    <h2 className="text-2xl pb-3 font-semibold text-orange-600">Send Message</h2>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="name" className="text-orange-600">Name</label>
                        <input type="text" name="name" id="name" required
                            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-orange-600 focus:outline-none focus:bg-gray-800 focus:text-orange-600"
                        />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="text-orange-600">Email</label>
                        <input type="email" name="email" id="email" required
                            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-orange-600 focus:outline-none focus:bg-gray-800 focus:text-orange-600"
                        />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="message" className="text-orange-600">Message</label>
                        <textarea name="message" id="message" rows="4" required
                            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-orange-600 focus:outline-none focus:bg-gray-800 focus:text-orange-600"
                        ></textarea>
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-gray-900 border border-orange-600 px-4 py-2 transition duration-150 focus:outline-none font-semibold hover:bg-orange-600 hover:text-white text-xl cursor-pointer">
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
