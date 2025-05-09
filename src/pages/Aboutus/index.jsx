import React, { Suspense, useRef, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/aboutus/aboutbg.webp";
import ContactSection from "../../pages/Home/UiComponents/ContactSection";
import CoursesOffered from "../../components/UiComponents/CoursesOffered";
import NewsEventsSection from "../Home/UiComponents/NewsEventsSection";
import TestimonialsSection from "../Home/UiComponents/TestimonialsSection";
import rightSideImg from "../../assets/aboutus/about_whychooseus.webp";
import visionImage from "../../assets/aboutus/ourvision.webp";
import missionImage from "../../assets/aboutus/ourmision.webp";

const TickSVG = () => (
  <svg
    className="w-6 h-6 text-[#F9920A] mr-2 inline-block shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="#F9920A" />
    <path
      d="M8 12L11 15L17 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AboutMission = () => {
  return (
    <section className="bg-white text-center py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-7xl mx-auto">
          At Crossroads, we’ve been passionately committed to shaping the
          futures of students since our establishment in 2008. With over a
          decade of experience, we’ve remained steadfast in our mission to
          provide quality education that acknowledges the unique potential of
          each student, empowering them to achieve their dreams. Our team is
          dedicated to staying ahead of the curve, consistently offering the
          latest and most promising educational opportunities in partnership
          with our esteemed associates. We recognize that every student is
          unique, with individual strengths and aspirations. At Crossroads, we
          tailor our guidance to help each student unlock their full potential
          and pursue their ambitions through carefully selected courses in
          prestigious institutions around the world.
        </p>
      </div>
    </section>
  );
};

const VisionMissionSection = () => {
  return (
    <section className="w-full mx-auto container px-4 sm:px-6 py-12 md:pt-20">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Video Section */}
        <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto relative overflow-hidden mb-6 md:mb-0">
          <iframe
            src="https://www.youtube.com/embed/e9PVe3bPGqw?autoplay=1&mute=1&controls=0&loop=1&playlist=e9PVe3bPGqw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </div>

        {/* Vision and Mission Section */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
            <div className="w-full md:w-1/2 text-center p-4 md:p-8 order-1 md:order-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#F9920A" }}>
                Our Mission
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our mission is to inspire and support students in their pursuit of international education, offering personalized guidance, comprehensive services, and dedicated support to ensure they are well-prepared for success in a globalized world.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img
                src={missionImage}
                className="w-full h-auto"
                alt="Students together"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center p-4 md:p-8 order-1 md:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#F9920A" }}>
                Our Vision
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To be a world leader in empowering students to achieve their academic and career aspirations by providing unparalleled guidance and access to world-class education opportunities across the globe.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-2">
              <img
                src={visionImage}
                className="w-full h-auto"
                alt="Graduation ceremony"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Aboutus = () => {
  const bannerProps = {
    backgroundImage: bannerImg,
    title: "About Us",
    className: "px-1 relative",
    classNameTitle: "relative -top-24 text-services-title",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCounter: true,
    counterPosition: "overlay",
  };

  const listRef = useRef(null);
  const lineRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);

  const scrollableContents = [
    {
      heading: "Wide Range of Courses:",
      description:
        "Explore a diverse selection of programs, including MBBS, Bachelor's, Master's, and Diplomas across various fields such as Nursing, Engineering, and Management, available in multiple countries.",
    },
    {
      heading: "Global Study Destinations",
      description:
        "Choose to study in the country that best suits your aspirations. We offer services in India, Germany, the UK, the USA, Australia, Canada, France, New Zealand, Slovakia, Austria, Finland, and many more.",
    },
    {
      heading: "Supporting You on Your Journey",
      description:
        "Receive dedicated, high-quality guidance and support to ensure a strong start to a rewarding career.",
    },
    {
      heading: "Experienced Service Providers:",
      description:
        "Access opportunities for 100% tuition-free education, with stipends exceeding 1 lakh INR per month, and the freedom to earn while you learn.",
    },
    {
      heading: "Results Driven",
      description:
        "At Crossroads, we are committed to delivering results. Over the years, we have successfully met the varied learning needs of our students, empowering them to realize their aspirations.",
    },
  ];

  useEffect(() => {
    const list = listRef.current;
    const line = lineRef.current;
    const container = scrollContainerRef.current;

    const updateScrollbar = () => {
      if (list && line) {
        const scrollTop = list.scrollTop;
        const scrollHeight = list.scrollHeight;
        const clientHeight = list.clientHeight;
        const maxScroll = scrollHeight - clientHeight;

        const baseThumbHeight = (clientHeight / scrollHeight) * clientHeight;
        const thumbHeight = Math.max(baseThumbHeight * 0.5, 20);
        line.style.height = `${thumbHeight}px`;

        const scrollPercentage = maxScroll > 0 ? scrollTop / maxScroll : 0;
        const maxLineScroll = clientHeight - thumbHeight;
        const lineScroll = scrollPercentage * maxLineScroll;

        line.style.transform = `translateY(${lineScroll}px)`;
      }
    };

    const handleWheel = (event) => {
      if (!list) return;

      const deltaY = event.deltaY;
      const scrollTop = list.scrollTop;
      const scrollHeight = list.scrollHeight;
      const clientHeight = list.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      event.preventDefault();

      const newScrollTop = scrollTop + deltaY;
      if (newScrollTop >= 0 && newScrollTop <= maxScroll) {
        list.scrollTop = newScrollTop;
      } else if (newScrollTop < 0) {
        list.scrollTop = 0;
        window.scrollBy(0, deltaY);
      } else if (newScrollTop > maxScroll) {
        list.scrollTop = maxScroll;
        window.scrollBy(0, deltaY);
      }
    };

    const handleWheelOnScrollbar = (event) => {
      if (!list) return;

      event.preventDefault();
      const delta = event.deltaY > 0 ? 50 : -50;
      list.scrollTop += delta;
    };

    const handleMouseDown = (event) => {
      event.preventDefault();
      setIsDragging(true);
      setStartY(event.clientY);
      setStartScrollTop(list.scrollTop);
    };

    const handleMouseMove = (event) => {
      if (!isDragging || !list || !line) return;

      const deltaY = event.clientY - startY;
      const scrollHeight = list.scrollHeight;
      const clientHeight = list.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      const maxLineScroll = clientHeight - parseFloat(line.style.height || 20);

      const scrollPercentage = deltaY / maxLineScroll;
      const newScrollTop = startScrollTop + scrollPercentage * maxScroll;

      list.scrollTop = Math.max(0, Math.min(newScrollTop, maxScroll));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (list) {
      list.addEventListener("scroll", updateScrollbar);
    }
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    if (line) {
      line.addEventListener("wheel", handleWheelOnScrollbar, { passive: false });
      line.addEventListener("mousedown", handleMouseDown);
    }
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    updateScrollbar();

    return () => {
      if (list) {
        list.removeEventListener("scroll", updateScrollbar);
      }
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      if (line) {
        line.removeEventListener("wheel", handleWheelOnScrollbar);
        line.removeEventListener("mousedown", handleMouseDown);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startY, startScrollTop]);

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner {...bannerProps} />
      </Suspense>

      <section className="bg-white text-center py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 md:mt-10">
            <span style={{ color: "#00334D" }}>At </span>
            <span style={{ color: "#F9920A" }}>Crossroads</span>
          </h2>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 md:mt-0"
            style={{ color: "#00334D" }}
          >
            we tailor our guidance
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-7xl mx-auto mt-6 md:mt-10">
            We are a team of seasoned professionals who provide comprehensive
            educational support, from selecting the right study programs to
            assisting with job placements, both in India and internationally.
            Our experts are with our students every step of the way, ensuring
            that they reach their educational goals and embark on successful
            careers.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="relative mx-auto px-4 sm:px-6">
          <div ref={scrollContainerRef} className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
            <div className="relative bg-[#00334D] text-white flex flex-col items-start justify-center text-left p-6 md:p-4 md:pl-40 md:pr-20">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4">
                <span>Why </span>
                <span style={{ color: "#F9920A" }}>Crossroads?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                At Crossroads, we are committed to guiding students toward their
                dreams with personalized support and expert advice. Our mission
                is to simplify the complex journey of education and career
                planning.
              </p>

              <div className="relative w-full">
                <div className="absolute left-0 top-0 h-full w-1 bg-white overflow-hidden md:block hidden">
                  <div
                    ref={lineRef}
                    className="w-full bg-orange-500 transition-transform duration-200 ease-out cursor-pointer"
                  />
                </div>
                <div
                  ref={listRef}
                  className="pl-4 md:pl-8 ml-4 overflow-y-auto scrollbar-hide"
                  style={{ maxHeight: "300px" }}
                >
                  <ul className="space-y-4 md:space-y-6 pr-4">
                    {scrollableContents.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <TickSVG />
                        <div>
                          <h4
                            className="font-bold text-sm sm:text-base md:text-lg"
                            style={{ color: "#F9920A" }}
                          >
                            {item.heading}
                          </h4>
                          <p className="mt-1 text-xs sm:text-sm md:text-base">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full mt-6 md:mt-0">
              <img
                src={rightSideImg}
                alt="Crossroads Illustration"
                className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutMission />
      <VisionMissionSection />

      <Suspense fallback={<div>Loading...</div>}>
        <CoursesOffered />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsEventsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Aboutus;