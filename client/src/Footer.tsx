import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold mb-4">B2B Store</h2>
                    <p className="text-sm text-gray-400">
                        Toko online terpercaya menyediakan berbagai macam produk kebutuhan Anda dengan harga terbaik.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/products" className="hover:text-white">Produk</a></li>
                        <li><a href="/about" className="hover:text-white">Tentang Kami</a></li>
                        <li><a href="/contact" className="hover:text-white">Kontak</a></li>
                        <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Bantuan</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/shipping" className="hover:text-white">Pengiriman</a></li>
                        <li><a href="/returns" className="hover:text-white">Pengembalian</a></li>
                        <li><a href="/privacy" className="hover:text-white">Kebijakan Privasi</a></li>
                        <li><a href="/terms" className="hover:text-white">Syarat & Ketentuan</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
                    <div className="flex space-x-4 text-gray-300">
                        <a href="#" className="hover:text-white"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white"><FaInstagram /></a>
                        <a href="#" className="hover:text-white"><FaTwitter /></a>
                    </div>
                </div>

            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} MyStore. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
