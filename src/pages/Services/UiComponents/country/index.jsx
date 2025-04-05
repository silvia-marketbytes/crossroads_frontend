import React, { useState, useEffect, useRef } from "react";
import Banner from "../../../../components/Banner";
import bannerImg from "../../../../assets/country/banner.webp";
import ContactSection from "../../../../pages/Home/UiComponents/ContactSection";
import franceFlag from "../../../../assets/country/france.webp";
import germanyFlag from "../../../../assets/country/Germany.webp";
import australiaFlag from "../../../../assets/country/Australia.webp";

const CountrySection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardsPerSlide = 8;
  const sliderRef = useRef(null);

  const countryData = [
    { 
      name: "France", 
      flag: franceFlag, 
      description: "Experience world-class education in France, home to prestigious universities and rich cultural heritage. Perfect for students pursuing arts, business, and engineering." 
    },
    { 
      name: "Germany", 
      flag: germanyFlag, 
      description: "Study in Germany with tuition-free education at public universities. Excellent programs in engineering, technology, and sciences with strong industry connections." 
    },
    { 
      name: "Australia", 
      flag: australiaFlag, 
      description: "Australia offers high-quality education with globally recognized degrees. Ideal for students interested in research, marine biology, and environmental sciences." 
    },
    { 
      name: "Canada", 
      flag: franceFlag, 
      description: "Canada provides excellent post-study work opportunities with its welcoming immigration policies. Top choice for computer science and healthcare programs." 
    },
    { 
      name: "UK", 
      flag: germanyFlag, 
      description: "The UK boasts some of the world's oldest universities with short-duration programs. Best for literature, law, and finance studies." 
    },
    { 
      name: "USA", 
      flag: australiaFlag, 
      description: "The United States has the largest number of top-ranked universities offering flexible education systems and cutting-edge research facilities." 
    },
    { 
      name: "Japan", 
      flag: franceFlag, 
      description: "Japan combines advanced technology with traditional culture. Excellent for robotics, automotive engineering, and East Asian studies." 
    },
    { 
      name: "Netherlands", 
      flag: germanyFlag, 
      description: "The Netherlands offers many English-taught programs with a focus on practical learning and international classroom environments." 
    },
    { 
      name: "Sweden", 
      flag: australiaFlag, 
      description: "Sweden is known for its innovative education system and focus on sustainability. Great for environmental engineering and design programs." 
    },
    { 
      name: "Singapore", 
      flag: franceFlag, 
      description: "Singapore provides a global education hub with strong connections to Asian markets. Ideal for business and technology students." 
    },
    { 
      name: "New Zealand", 
      flag: germanyFlag, 
      description: "New Zealand offers safe study environments with globally accredited qualifications and stunning natural landscapes." 
    },
    { 
      name: "Switzerland", 
      flag: australiaFlag, 
      description: "Switzerland is renowned for hospitality management and international relations programs with multilingual learning opportunities." 
    },
    { 
      name: "Switzerland", 
      flag: australiaFlag, 
      description: "Switzerland is renowned for hospitality management and international relations programs with multilingual learning opportunities." 
    },
    { 
      name: "Switzerland", 
      flag: australiaFlag, 
      description: "Switzerland is renowned for hospitality management and international relations programs with multilingual learning opportunities." 
    },
    { 
      name: "Switzerland", 
      flag: australiaFlag, 
      description: "Switzerland is renowned for hospitality management and international relations programs with multilingual learning opportunities." 
    },
    { 
      name: "Switzerland", 
      flag: australiaFlag, 
      description: "Switzerland is renowned for hospitality management and international relations programs with multilingual learning opportunities." 
    },
    { 
      name: "Switzerland", 
      flag: australiaFlag, 
      description: "Switzerland is renowned for hospitality management and international relations programs with multilingual learning opportunities." 
    },
    { 
      name: "Switzerland", 
      flag: australiaFlag, 
      description: "Switzerland is renowned for hospitality management and international relations programs with multilingual learning opportunities." 
    },
  ];

  const totalSlides = Math.ceil(countryData.length / cardsPerSlide);

  // Auto-scroll effect with 2 second interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section 
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
      ref={sliderRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            <span className="text-[#00334D]">Know</span>
            <span className="text-[#F9920A]"> your destination</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Begin your academic journey in these welcoming study destinations. Explore top universities,
            discover vibrant cultures, and unlock global career opportunities.
          </p>
        </div>

        {/* Country Cards Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              width: `${totalSlides * 100}%`, 
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              willChange: 'transform'
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex} 
                className="w-full flex-shrink-0"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                  {countryData
                    .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                    .map((country, index) => (
                      <div
                        key={`${slideIndex}-${index}`}
                        className="relative h-80 bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl"
                        onMouseEnter={() => {
                          setHoveredCard(slideIndex * cardsPerSlide + index);
                          setIsPaused(true);
                        }}
                        onMouseLeave={() => {
                          setHoveredCard(null);
                          setIsPaused(false);
                        }}
                      >
                        {/* Default View */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
                          <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-[#00334D]/10"
                            loading="lazy"
                          />
                          <h3 className="text-2xl font-bold text-[#00334D]">{country.name}</h3>
                        </div>

                        {/* Hover View */}
                        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#00334D]/95 to-[#00334D] text-white transition-all duration-300 ${hoveredCard === slideIndex * cardsPerSlide + index ? 'opacity-100' : 'opacity-0'}`}>
                          <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            className="w-16 h-16 object-cover rounded-full mb-3 border-2 border-white"
                          />
                          <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                          <p className="text-sm text-center mb-4 line-clamp-3 px-2">
                            {country.description}
                          </p>
                          <button className="bg-[#F9920A] hover:bg-[#e68209] text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F9920A] focus:ring-opacity-50">
                            Read More
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-[#00334D] text-white p-3 rounded-full hover:bg-[#F9920A] transition duration-300 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1}
            className="bg-[#00334D] text-white p-3 rounded-full hover:bg-[#F9920A] transition duration-300 disabled:opacity-50"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const Country = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "Choose.Apply.Study",
    className: "bg-gradient-to-r from-black/10 via-black/5 to-transparent",
    classNameTitle: "text-white text-4xl sm:text-5xl font-bold",
    showDateTime: false,
    showSocialMedia: false,
  };

  return (
    <div className="bg-gray-50">
      <Banner {...bannerProps} />
      <CountrySection />
      <ContactSection />
    </div>
  );
};

export default Country;