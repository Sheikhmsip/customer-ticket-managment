import React from 'react';
import { FaEnvelope, FaFacebook, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Fotter = () => {
    return (
        <div className="bg-black text-gray-300 pt-12 pb-6">
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-1">
                        <h2 className="text-white text-xl font-semibold mb-4">
                            Ticket Management
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>About Us</li>
                            <li>Our Mission</li>
                            <li>Contact Sales</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Products & Services</li>
                            <li>Customer Stories</li>
                            <li>Download Apps</li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Information</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Join Us</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Social Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FaXTwitter /> @Ticket Management 
                            </li>
                            <li className="flex items-center gap-2"> <FaLinkedinIn></FaLinkedinIn> @Ticket Management </li>
                            <li className="flex items-center gap-2"><FaFacebook></FaFacebook> @Ticket Management</li>
                            <li className="flex items-center gap-1"><FaEnvelope></FaEnvelope>support@ticket management.com</li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Ticket Management. All rights reserved.
                </div>

            </div>
        </div>
    );
};

export default Fotter;