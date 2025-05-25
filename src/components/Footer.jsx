
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      const socialLinks = [
        { icon: <Facebook className="h-6 w-6" />, href: "#", label: "Facebook" },
        { icon: <Twitter className="h-6 w-6" />, href: "#", label: "Twitter" },
        { icon: <Linkedin className="h-6 w-6" />, href: "#", label: "LinkedIn" },
        { icon: <Instagram className="h-6 w-6" />, href: "#", label: "Instagram" },
        { icon: <Youtube className="h-6 w-6" />, href: "#", label: "YouTube" },
      ];

      const footerNavLinks = [
        { to: "/about", text: "About Us" },
        { to: "/courses", text: "Courses" },
        { to: "/contact", text: "Contact" },
        { to: "/privacy", text: "Privacy Policy" },
        { to: "/terms", text: "Terms of Service" },
      ];

      return (
        <footer className="bg-itve-blue-dark text-itve-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <span className="text-xl font-bold">ITVE</span>
                <p className="mt-2 text-sm text-itve-blue-light opacity-80">
                  Empowering individuals through technical and vocational education.
                </p>
                <div className="mt-6 flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      aria-label={link.label}
                      className="text-itve-blue-light hover:text-itve-white transition-colors duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-lg font-semibold">Quick Links</span>
                <ul className="mt-4 space-y-2">
                  {footerNavLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-itve-blue-light hover:text-itve-white hover:underline transition-colors duration-300"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-lg font-semibold">Contact Us</span>
                <ul className="mt-4 space-y-2 text-sm text-itve-blue-light opacity-80">
                  <li>Email: info@itve.edu</li>
                  <li>Phone: +1 (234) 567-8900</li>
                  <li>Address: 123 Education Lane, Karachi, Pakistan 12345</li>
                </ul>
              </div>
              
              <div>
                <span className="text-lg font-semibold">Newsletter</span>
                <p className="mt-2 text-sm text-itve-blue-light opacity-80">
                  Stay updated with our latest courses and news.
                </p>
                <form className="mt-4 flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-l-md text-itve-gray-dark focus:outline-none focus:ring-2 focus:ring-itve-blue"
                  />
                  <button
                    type="submit"
                    className="bg-itve-blue px-4 py-2 rounded-r-md text-itve-white font-semibold hover:bg-opacity-80 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 border-t border-itve-blue pt-8 text-center">
              <p className="text-sm text-itve-blue-light opacity-80">
                &copy; {currentYear} Institute of Technical & Vocational Education (ITVE). All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
  