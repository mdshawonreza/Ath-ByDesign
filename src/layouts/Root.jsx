import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import ScrollToTop from '../shared/ScrollToTop';
import Footer from '../shared/Footer';
import Loader from '../shared/Loader';
import {motion, AnimatePresence } from 'framer-motion';

const Root = () => {
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    const [showNavbar, setShowNavbar] = useState(true);
      const [lastScrollY, setLastScrollY] = useState(0);
    
      // Handle scroll for navbar show/hide
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false); // scroll down → hide
        } else {
          setShowNavbar(true);  // scroll up → show
        }
        setLastScrollY(window.scrollY);
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [lastScrollY]);
    
      
     
    
     
      
    return (
        <div>
            {
                isLoading ? <> <Loader></Loader></> :
                    <>
                     <ScrollToTop /> {/* Scroll top on route change */}
                        <AnimatePresence>
                            {showNavbar && (
                                <motion.div
                                    className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50"
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -100, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Navbar />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Outlet></Outlet>
                        <Footer></Footer>

                    </>
            }




        </div>
    );
};

export default Root;