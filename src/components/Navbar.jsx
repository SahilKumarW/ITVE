import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpenText, Sparkles, Award, Info, Phone, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', text: 'Home', icon: <Sparkles className="h-5 w-5" /> },
  { to: '/courses', text: 'Courses', icon: <BookOpenText className="h-5 w-5" /> },
  { to: '/updates', text: 'Updates', icon: <Award className="h-5 w-5" /> },
  { to: '/achievements', text: 'Achievements', icon: <Sparkles className="h-5 w-5" /> },
  { to: '/about', text: 'About Us', icon: <Info className="h-5 w-5" /> },
  { to: '/contact', text: 'Contact', icon: <Phone className="h-5 w-5" /> },
];

const SlidingBanner = () => {
  return (
    <div className="bg-itve-blue text-itve-white py-2 overflow-hidden">
      <motion.div
        className="whitespace-nowrap"
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <span className="inline-block px-4 text-sm font-medium">
          This website is a initial prototype built by Institute of Technical & Vocational Education (ITVE) and may differ from actual website.
        </span>
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeLinkClass = "text-itve-blue-dark font-semibold border-b-2 border-itve-blue-dark";
  const inactiveLinkClass = "text-itve-gray-dark hover:text-itve-blue transition-colors duration-300";

  return (
    <>
      <nav className="bg-itve-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <img  className="h-12 w-auto" alt="ITVE Logo" src="https://images.unsplash.com/photo-1671525526206-6671a39bdc12" />
              </motion.div>
              <span className="ml-3 text-2xl font-bold text-itve-blue-dark">ITVE</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `${isActive ? activeLinkClass : inactiveLinkClass} py-2 text-sm font-medium flex items-center gap-1`
                  }
                >
                  {link.icon} {link.text}
                </NavLink>
              ))}
              <Button variant="outline" className="border-itve-blue text-itve-blue hover:bg-itve-blue hover:text-white">
                <LogIn className="mr-2 h-4 w-4" /> Student Portal
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6 text-itve-blue-dark" /> : <Menu className="h-6 w-6 text-itve-blue-dark" />}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-itve-white shadow-lg absolute w-full"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${isActive ? 'bg-itve-blue-light text-itve-blue-dark' : 'text-itve-gray-dark hover:bg-itve-gray-light hover:text-itve-blue-dark'}`
                    }
                  >
                    {link.icon} {link.text}
                  </NavLink>
                ))}
                <Button variant="outline" className="w-full mt-2 border-itve-blue text-itve-blue hover:bg-itve-blue hover:text-white">
                  <LogIn className="mr-2 h-4 w-4" /> Student Portal
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <SlidingBanner />
    </>
  );
};

export default Navbar;