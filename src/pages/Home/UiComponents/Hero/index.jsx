import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import Modal from '../../../../components/modal';
import heroBgFirst from '/src/assets/hero-bg.png';
import heroBgSecond from '/src/assets/Ausbildung Banner/ausbildung b_result.webp';
import useWindowSize from '/src/Hooks/useWindowSize';
import { AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
const slides = [
  {
    id: 1,
    background: heroBgFirst,
    title: (
      <>
        Let your <span className="font-bold text-7xl" style={{ color: '#F9920A' }}>MBBS</span>{' '}
        <span className="block">Dreams Take Wings</span>
        <span className="block">Beyond Borders</span>
      </>
    ),
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the',
    link: '/services/education/course/mbbs',
  },
  {
    id: 2,
    background: heroBgSecond,
    title: (
      <>
        Discover <span className="font-bold text-7xl" style={{ color: '#F9920A' }}>Ausbildung</span>{' '}
        <span className="block">Dreams Take Wings</span>
        <span className="block">Beyond Borders</span>
      </>
    ),
    description: 'Discover opportunities to study medicine abroad with our expert guidance and support.',
    link: '/services/education/course/ausbildung',
  },
];
 
const Hero = () => {
  const { width } = useWindowSize();
  const heroHeight = width < 768 ? '45vh' : '80vh';
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '16px', textAlign: 'center' }}>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button
        className="w-[6px] h-[6px] rounded-full bg-white/50 focus:outline-none transition-all duration-300"
      ></button>
    ),
  };
 
  return (
    <div
      className="relative bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ height: heroHeight }}
    >
      <Slider {...slickSettings} className="w-full">
        {slides.map((slide) => (
          <div key={slide.id} className="w-full">
            <div
              className="relative bg-cover bg-center flex items-center w-full h-[60vh] md:h-[80vh]"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 px-8 md:px-42 ml-6 text-white w-full h-full flex items-center">
                <div className="text-left">
                  <h1 className="text-3xl md:text-[56px] font-light leading-tight">{slide.title}</h1>
                  <p className="mt-4 text-lg md:text-xl max-w-lg">{slide.description}</p>
                  <div className="mt-6 block lg:flex items-center justify-start space-x-4 w-full">
                    <Button
                      label="Apply Now"
                      variant="primary"
                      className="px-6 py-2 rounded-full text-sm text-white hover:text-[#00334D] bg-[#00334D] hover:bg-[#fcfcfc] transition-all duration-300"
                      onClick={openModal}
                    />
                    <Link to={slide.link}>
                      <Button
                        label="Learn More"
                        variant="secondary"
                        className="px-6 py-2 rounded-full text-sm text-white hover:text-[#F9920A] bg-[#F9920A] hover:bg-[#fcfcfc] transition-all duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
 
      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
 
      <style jsx>{`
        .px-6.py-3.rounded-full.text-white.bg-\\[#00334D\\]:hover {
          background-color: #00283A;
        }
        .px-6.py-3.rounded-full.text-white.bg-\\[#F9920A\\]:hover {
          background-color: #E08200;
        }
 
        .slick-dots li button:before {
          content: none !important;
        }
        .slick-dots li button {
          width: 6px !important;
          height: 6px !important;
          background-color: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
        }
        .slick-dots li.slick-active button {
          background-color: #F9920A !important;
        }
 
        @media (max-width: 767px) {
          .relative.z-10 {
            padding-left: 1rem;
            padding-right: 1rem;
            margin-left: 0;
          }
          .text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
          .text-7xl {
            font-size: 2.5rem;
          }
          .mt-4.text-lg {
            font-size: 1rem;
            max-width: 100%;
          }
          .mt-6.flex {
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.5rem;
          }
          .px-6.py-3 {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .relative.z-10 {
            padding-left: 2rem;
            padding-right: 2rem;
            margin-left: 1rem;
          }
          .text-3xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
          }
          .text-7xl {
            font-size: 3rem;
          }
          .mt-4.text-lg {
            font-size: 1.125rem;
          }
          .mt-6.flex {
            flex-direction: row;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};
 
export default Hero;
 