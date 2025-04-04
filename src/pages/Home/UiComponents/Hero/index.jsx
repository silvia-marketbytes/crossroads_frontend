import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import Button from '../../../../components/Button';
import useWindowSize from '/src/Hooks/useWindowSize';
import apiClient from '../../../../api/apiClient';
 
const Hero = ({ slides, setSlides, setError }) => {
  const { width } = useWindowSize();
  const heroHeight = width < 768 ? '60vh' : '80vh';
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity" />
    ),
    appendDots: dots => (
      <div style={{ bottom: '20px' }}>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };
 
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
 
  useEffect(() => {
    apiClient.get('/home/home-banners/')
      .then(response => {
        const transformedSlides = response.data
          .map(banner => ({
            bg: banner.image,
            title: banner.title,
            desc: banner.description,
            order: banner.order
          }))
          .sort((a, b) => a.order - b.order);
        setSlides(transformedSlides);
      })
      .catch(err => {
        setError(err.message);
        console.error('Error fetching banners:', err);
      });
  }, [setSlides, setError]);
 
  return (
    <div className="relative overflow-hidden">
      {slides && slides.length > 0 && (
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className="relative bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${slide.bg})`, height: heroHeight }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
                <motion.div
                  className="relative z-10 px-4 sm:px-8 md:px-16 text-white w-full max-w-7xl mx-auto"
                  initial="hidden"
                  animate="visible"
                  key={index}
                >
                  <div className="text-left">
                    <motion.div
                      className="leading-tight"
                      variants={textVariants}
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
 
                    <motion.div
                      className="mt-4 max-w-lg"
                      variants={textVariants}
                      transition={{ delay: 0.2 }}
                      dangerouslySetInnerHTML={{ __html: slide.desc }}
                    />
 
                    <motion.div
                      className="mt-8 flex space-x-4"
                      variants={textVariants}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        label="Apply Now"
                        className="text-[#fcfcfc] text-xs font-normal bg-[#00334D] hover:bg-[#00334F] rounded-full"
                      />
                      <Button
                        label="Contact Us"
                        className="text-[#fcfcfc] text-xs font-normal bg-[#F9920A] hover:bg-[#F9920D] rounded-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
 
export default Hero;