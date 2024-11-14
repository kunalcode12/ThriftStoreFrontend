import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const slides = [
  {
    image: assets.Img1,
    title: "Autumn Elegance",
    subtitle: "Discover the new collection",
    cta: "Shop Now",
  },
  {
    image: assets.Img2,
    title: "Luxe Essentials",
    subtitle: "Timeless pieces for your wardrobe",
    cta: "Explore",
  },
  {
    image: assets.Img3,
    title: "Urban Chic",
    subtitle: "Street style redefined",
    cta: "View Collection",
  },
  {
    image: assets.Img4,
    title: "Sustainable Fashion",
    subtitle: "Eco-friendly, style-forward",
    cta: "Learn More",
  },
];

export default function EliteFashionSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovering]);

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-20 left-20 text-white z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-serif mb-4"
        >
          {slides[currentSlide].title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl font-light mb-8"
        >
          {slides[currentSlide].subtitle}
        </motion.p>
        <Link to="/collection">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="px-8 py-3 bg-white text-black text-lg font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
            //   onClick={()=>nav}
          >
            {slides[currentSlide].cta}
          </motion.button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      </div>
      <div className="absolute bottom-8 right-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
